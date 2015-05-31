(function() {
  var rewriteLinks, toggleProjects,
    __indexOf = [].indexOf || function(item) { for (var i = 0, l = this.length; i < l; i++) { if (i in this && this[i] === item) return i; } return -1; };

  toggleProjects = function() {
    var project, tag, _i, _len, _ref, _results;
    tag = location.hash.slice(1);
    _ref = document.getElementsByClassName('project');
    _results = [];
    for (_i = 0, _len = _ref.length; _i < _len; _i++) {
      project = _ref[_i];
      if (tag === '') {
        _results.push(project.classList.remove('hide'));
      } else {
        if (__indexOf.call(project.classList, tag) >= 0) {
          _results.push(project.classList.remove('hide'));
        } else {
          _results.push(project.classList.add('hide'));
        }
      }
    }
    return _results;
  };

  rewriteLinks = function() {
    var name, tag, _i, _len, _ref, _results;
    _ref = document.getElementsByClassName('tag');
    _results = [];
    for (_i = 0, _len = _ref.length; _i < _len; _i++) {
      tag = _ref[_i];
      name = tag.getAttribute('href');
      _results.push(tag.setAttribute('href', '#' + name));
    }
    return _results;
  };

  rewriteLinks();

  if (location.hash) {
    toggleProjects();
  }

  window.addEventListener('hashchange', toggleProjects, false);

}).call(this);
