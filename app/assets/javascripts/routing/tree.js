
/**
 * Simple decision tree parser and traversal.
 * @author njmcode
 * @param data - object {
 *     initial: [], (list of choice IDs for the root node)
 *     choices: {}  (keyed object of all possible choices)
 * }
 *  https://codepen.io/njmcode/pen/Fjcai
**/
var DecisionTree = function(data) {

  this.initial = data.initial;
  this.choices = data.choices;

  /* Return an array of choice objects for the root of the tree */
  this.getInitial = function() {

    if (!this.initial) throw 'DecisionTree: no initial choice(s) specified';
    return this.getChoices(this.initial);

  };

  /* Get full choice data by specific id */
  this.getChoice = function(id) {

    if (!(id in this.choices)) return false;
    if (!('id' in this.choices[id])) this.choices[id].id = id;
    return this.choices[id];

  };

  /* As above, but passing an array of choice IDs */
  this.getChoices = function(idList) {
    if(!idList) return [];
    var list = [];
    for(var i = 0, ln = idList.length; i < ln; i++) {
      var childChoice = this.getChoice(idList[i]);
      list.push(childChoice);
    }
    return list;

  };

  /* Get an array of choice data for a parent id */
  this.getChildren = function(parentId) {

    if (!(parentId in this.choices)) return false;
    if (!('children' in this.choices[parentId])) return false;

    var childIds = this.choices[parentId].children;
    childIds = childIds.filter(function(n){ return n != undefined }); // remove any null values
    return this.getChoices(childIds);

  };

  /* Get an array of choice data for the parent(s) of an id */
  this.getParents = function(id) {

    var parents = [];
    var node = this.getChoice(id);

    while(node.parent) {
      node = this.getChoice(node.parent);
      parents.unshift(node);
    }

    return parents;

  };

  /* Get just an array of ids for the parents of a specific id */
  this.getParentIds = function(id) {
    var parents = this.getParents(id);
    var parentIds = [];
    for(var i = 0, ln = parents.length; i < ln; i++) {
      parentIds.push(parents[i].id);
    }
    return parentIds;
  };

  /* Get the 'name' prop for the parent of an id */
  this.getParentName = function(id) {
    var parent = this.getParents(id).pop();
    if(!parent) {
      return false;
    } else {
      return parent.name;
    }
  };


  /* Get the 'question' prop for the parent of an id */
  this.getParentQuestion = function(id) {
    var parent = this.getParents(id).pop();
    if(!parent) {
      return false;
    } else {
      return parent.question;
    }
  };

  /* Init - insert ids into choice objects, check dups, associate parents, etc */
  this.init = function() {

    var idList = [];
    for(var k in this.choices) {
      if(idList.indexOf(k) !== -1) throw 'DecisionTree: duplicate ID "' + k + '" in choice set';

      var choice = this.getChoice(k);
      choice.id = k;

      var children = this.getChildren(k);

      for(var i = 0; i < children.length; i++) {

        var child = children[i];
        // if(child.parent) throw 'DecisionTree: tried to assign parent "' + k + '" to child "' + choice.children[i] + '" which already has parent "' + child.parent + '"';
        child.parent = k;

      }

    }

    console.log('init', this.initial, this.choices);

  };

  this.init();

};



$( document ).ready(function() {

    var tree = new DecisionTree(data);
    var $list = $('#choices');
    var $title = $('.question-heading');
    var $back = $('#back');
    var $legend = $('#legendtitle');
    var inputbr = '';

    var current_id = null;

    var renderList = function(items) {

      var title = tree.getParentQuestion(items[0].id);
      if(title) {
        $title.text(title);
        $legend.text(title);
      } else {
        $title.text(firstQuestion);
        $legend.text(firstQuestion);
      }

      $list.empty();
      for(var i = 0; i < items.length; i++) {
        var item = items[i];
        if(typeof item.description === 'undefined') {
          item.description = '';
        } else {
          inputbr = '<br>';
        }

        if(items.length>1) {
          //$list.append('<label for="' + item.id + '" class="block-label"><input id="' + item.id + '" type="radio" name="data-choice" value="' + item.id + '"><span class="heading-small">' + item.name + '</span>' + inputbr + item.description + '</label>');


          $list.append('<div class="multiple-choice"><input id="' + item.id + '" type="radio" name="data-choice" value="' + item.id + '"><label class="selection-button-radio" for="' + item.id + '"><span>' + item.name + '</span>' + inputbr + item.description + '</label>');




        } else {
          $list.append('<div class="panel panel-border-wide"><p>' + item.name + '</p>' + item.description + '</div><style>#submit{display:none;}</syle>');
        }

      }
      /* Call selection buttons script each time */
      var $blockLabels = $(".block-label input[type='radio'], .block-label input[type='checkbox']")
      // new GOVUK.SelectionButtons($blockLabels) // eslint-disable-line
    };

    var _doInitial = function() {
        var initData = tree.getInitial();
        current_id = null;
        renderList(initData);
    };

    /* This for links - not used
    $(document).on('click', '#choices a', function(e) {
      e.preventDefault();
      var choiceId = $(this).data('choice');
      console.log('clicked', choiceId);

      var kids = tree.getChildren(choiceId);
      if(kids) {
        current_id = choiceId;
        renderList(kids);
      }
    });
      */

    $("#submit").click(function(e) {
      e.preventDefault();
      var choiceId = $("#choiceform :input[name='data-choice']:checked")[0].value;
      console.log('clicked', choiceId);

      var kids = tree.getChildren(choiceId);
      if(kids) {
        current_id = choiceId;
        renderList(kids);
      }
      $(window).scrollTop(0);
    });

    $('#back').on('click', function(e) {
      e.preventDefault();
      if(!current_id) return false;
      console.log('back button clicked', current_id);

      var parents = tree.getParents(current_id);

      if(parents.length > 0) {
        var prev_node = parents.pop();
        current_id = prev_node.id;
        renderList(tree.getChildren(prev_node.id));
      } else {
        _doInitial();
      }

    });

    _doInitial();

});
