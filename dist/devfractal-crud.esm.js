import { Page } from 'devfractal-api';
import { Route, useLocation, useHistory, useMatch } from 'devfractal-router';
import { Get, Post, Put } from 'devfractal-ui-api';
import { stringify, parse } from 'query-string';
import React from 'react';
import { opt, IntFromString, string, cast, record, obj, fn, req, number, readonlyArray, getProp, type, empty, union, Int, chop, verify, toPromise, boolean, date, camelCaseToPhrase, assert } from 'technoidentity-utils';
import { classNamesHelper, removeIconHelpers, removeControlHelpers, removeHelpers, ButtonsGroup, Icon, Section, Columns, Column, Title, CheckBox, Text, Container, Field, Button } from 'devfractal-ui-core';
import { Link } from 'react-router-dom';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import { SimpleTable, Simple } from 'devfractal-simple';
import { Pagination, PaginationPrevious, PaginationNext } from 'devfractal-ui';
import axios from 'axios';
import { formikSubmit } from 'devfractal-forms';
import { format } from 'date-fns';
import { Switch } from 'react-router';

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

var ClientQuery =
/*#__PURE__*/
opt({
  page: IntFromString,
  limit: IntFromString,
  asc: string,
  desc: string
});

function defaultQueryFn(search) {
  var _cast = cast(ClientQuery, cast(record(string, string), parse(search))),
      _cast$page = _cast.page,
      page = _cast$page === void 0 ? 1 : _cast$page,
      _cast$limit = _cast.limit,
      limit = _cast$limit === void 0 ? 25 : _cast$limit,
      asc = _cast.asc,
      desc = _cast.desc;

  return {
    range: {
      current: page,
      limit: limit
    },
    asc: asc ? [asc] : [],
    desc: desc ? [desc] : []
  };
}

function Children(_ref) {
  var asyncFn = function asyncFn(query) {
    try {
      return Promise.resolve(query ? api.list(query) : api.many());
    } catch (e) {
      return Promise.reject(e);
    }
  };

  var api = _ref.api,
      Component = _ref.list,
      _ref$queryFn = _ref.queryFn,
      queryFn = _ref$queryFn === void 0 ? defaultQueryFn : _ref$queryFn;

  var _useLocation = useLocation(),
      pathname = _useLocation.pathname,
      search = _useLocation.search;

  var _useHistory = useHistory(),
      push = _useHistory.push; // tslint:disable-next-line: typedef


  var query = queryFn(search);

  function handlePageChange(page) {
    push(pathname + "?" + stringify(_extends({}, query, {
      page: page
    })));
  }

  var page = Page.is(query.range) && query.range.current ? query.range.current : 1;
  return React.createElement(Get, {
    asyncFn: asyncFn,
    deps: [query]
  }, function (data) {
    return React.createElement(Component, {
      data: data,
      page: page,
      onPageChange: handlePageChange
    });
  });
}

function All(_ref2) {
  var path = _ref2.path,
      props = _objectWithoutPropertiesLoose(_ref2, ["path"]);

  return path ? React.createElement(Route, {
    path: path,
    render: function render() {
      return React.createElement(Children, Object.assign({}, props));
    }
  }) : React.createElement(Children, Object.assign({}, props));
}

var ButtonLink = function ButtonLink(_ref) {
  var _classNamesHelper;

  var variant = _ref.variant,
      size = _ref.size,
      state = _ref.state,
      fullWidth = _ref.fullWidth,
      rounded = _ref.rounded,
      inverted = _ref.inverted,
      outlined = _ref.outlined,
      children = _ref.children,
      props = _objectWithoutPropertiesLoose(_ref, ["variant", "size", "state", "fullWidth", "rounded", "inverted", "outlined", "children"]);

  var classes = classNamesHelper(props, 'button', (_classNamesHelper = {}, _classNamesHelper["is-" + variant] = variant, _classNamesHelper["is-" + size] = size, _classNamesHelper["is-" + state] = state, _classNamesHelper['is-rounded'] = rounded, _classNamesHelper['is-inverted'] = inverted, _classNamesHelper['is-outlined'] = outlined, _classNamesHelper['is-fullwidth'] = fullWidth, _classNamesHelper));

  var _removeIconHelpers = removeIconHelpers(removeControlHelpers(removeHelpers(props))),
      inputMode = _removeIconHelpers.inputMode,
      linkProps = _objectWithoutPropertiesLoose(_removeIconHelpers, ["inputMode"]); // const linkInputMode = (inputMode && inputMode as unknown as string) || undefined
  // tslint:disable-next-line: typedef


  return React.createElement(Link, Object.assign({}, linkProps, {
    className: classes
  }), children);
};

function base(resource, basePath) {
  return basePath ? basePath + "/" + resource : "/" + resource;
}
function paths(resource, basePath) {
  return {
    list: "" + base(resource, basePath),
    view: base(resource, basePath) + "/:id",
    edit: base(resource, basePath) + "/:id/edit",
    create: base(resource, basePath) + "/new"
  };
}
function links(resource, basePath) {
  return _extends({}, paths(resource), {
    view: function view(id) {
      return base(resource, basePath) + "/" + id;
    },
    edit: function edit(id) {
      return base(resource, basePath) + "/" + id + "/edit";
    }
  });
}
function formProps(spec) {
  return obj({
    initial: spec
  }, {
    onSubmit: fn()
  });
}
function listProps(spec) {
  return req({
    page: number,
    onPageChange: fn(),
    data: readonlyArray(spec)
  });
}

function Children$1(_ref) {
  var api = _ref.api,
      redirectTo = _ref.redirectTo,
      Component = _ref.form;
  return React.createElement(Post, {
    component: Component,
    onPost: api.create,
    redirectTo: redirectTo
  });
}

function Create(_ref2) {
  var path = _ref2.path,
      props = _objectWithoutPropertiesLoose(_ref2, ["path"]);

  return path ? React.createElement(Route, {
    path: path,
    render: function render() {
      return React.createElement(Children$1, Object.assign({}, props));
    }
  }) : React.createElement(Children$1, Object.assign({}, props));
}

var CreateLink = function CreateLink(_ref) {
  var alignment = _ref.alignment,
      props = _objectWithoutPropertiesLoose(_ref, ["alignment"]);

  return React.createElement(ButtonsGroup, {
    alignment: alignment
  }, React.createElement(ButtonLink, Object.assign({}, props)));
};

function Children$2(_ref) {
  var _type;

  var api = _ref.api,
      redirectTo = _ref.redirectTo,
      Component = _ref.form;
  var idPropSpec = getProp(api.spec, api.idKey);

  if (idPropSpec === undefined) {
    throw new Error(api.idKey + " not defined");
  }

  var _useMatch = useMatch(type((_type = {}, _type[api.idKey] = string, _type))),
      params = _useMatch.params;

  return React.createElement(Put // @TODO: possible to fix this casting nonsense?
  , {
    // @TODO: possible to fix this casting nonsense?
    id: params[api.idKey],
    doGet: api.get,
    onPut: api.replace,
    component: Component,
    redirectTo: redirectTo
  });
}

function Edit(_ref2) {
  var path = _ref2.path,
      props = _objectWithoutPropertiesLoose(_ref2, ["path"]);

  return path ? React.createElement(Route, {
    path: path,
    render: function render() {
      return React.createElement(Children$2, Object.assign({}, props));
    }
  }) : React.createElement(Children$2, Object.assign({}, props));
}

function CrudRoutes(_ref) {
  var api = _ref.api,
      list = _ref.list,
      form = _ref.form,
      _ref$paths = _ref.paths,
      paths$1 = _ref$paths === void 0 ? paths(api.resource) : _ref$paths,
      _ref$redirectTo = _ref.redirectTo,
      redirectTo = _ref$redirectTo === void 0 ? paths$1.list : _ref$redirectTo;
  var create = paths$1.create,
      edit = paths$1.edit,
      listPath = paths$1.list;
  return React.createElement(React.Fragment, null, React.createElement(Edit, {
    path: edit,
    api: api,
    form: form,
    redirectTo: redirectTo
  }), React.createElement(All, {
    api: api,
    list: list,
    path: listPath
  }), React.createElement(Create, {
    path: create,
    redirectTo: redirectTo,
    api: api,
    form: form
  }));
}

var Actions = function Actions(_ref) {
  var editTo = _ref.editTo,
      onDelete = _ref.onDelete;
  return React.createElement(React.Fragment, null, React.createElement(Link, {
    to: editTo
  }, React.createElement(Icon, {
    icon: faEdit
  })), onDelete && React.createElement("a", {
    href: "#!",
    onClick: function onClick(evt) {
      evt.preventDefault();
      onDelete();
    }
  }, React.createElement(Icon, {
    icon: faTrash
  })));
};
function CrudTable(_ref2) {
  var data = _ref2.data,
      select = _ref2.select,
      override = _ref2.override,
      extra = _ref2.extra,
      editTo = _ref2.editTo,
      _onDelete = _ref2.onDelete,
      onRowClicked = _ref2.onRowClicked;
  return React.createElement(SimpleTable, {
    data: data,
    select: select,
    override: override,
    extra: [].concat(extra || [], ['Actions']),
    striped: true,
    onRowClicked: onRowClicked
  }, function (key, value) {
    return key === 'Actions' ? React.createElement(Actions, {
      editTo: editTo(value),
      onDelete: function onDelete() {
        if (_onDelete) {
          _onDelete(value);
        }
      }
    }) : // tslint:disable-next-line: no-null-keyword
    null;
  });
}

function formComponent(spec, inner) {
  return function (_ref) {
    var initial = _ref.initial,
        props = _objectWithoutPropertiesLoose(_ref, ["initial"]);

    var Component = inner;
    var verified = cast(formProps(spec), props);

    var compProps = _extends({
      initial: initial || empty(spec),
      edit: initial !== undefined
    }, verified);

    return React.createElement(Component, Object.assign({}, compProps));
  };
}

function listComponent(spec, Component) {
  return function (props) {
    return React.createElement(Component, Object.assign({}, cast(listProps(spec), props)));
  };
}

function Children$3(_ref) {
  var api = _ref.api,
      id = _ref.id,
      Component = _ref.view;
  return React.createElement(Get, {
    asyncFn: function asyncFn() {
      return api.get(id);
    }
  }, function (data) {
    return React.createElement(Component, {
      data: data
    });
  });
}

function One(_ref2) {
  var path = _ref2.path,
      props = _objectWithoutPropertiesLoose(_ref2, ["path"]);

  return path ? React.createElement(Route, {
    path: path,
    render: function render() {
      return React.createElement(Children$3, Object.assign({}, props));
    }
  }) : React.createElement(Children$3, Object.assign({}, props));
}

var Pager = function Pager(_ref) {
  var page = _ref.page,
      maxPages = _ref.maxPages,
      onPageChange = _ref.onPageChange;
  return React.createElement(Pagination, {
    alignment: "centered"
  }, React.createElement(PaginationPrevious, {
    invisible: page <= 1,
    onClick: function onClick() {
      onPageChange(page - 1);
    }
  }, "Previous"), React.createElement(PaginationNext, {
    invisible: maxPages !== undefined && page >= maxPages,
    onClick: function onClick() {
      onPageChange(page + 1);
    }
  }, "Next"));
};

function useQuery(spec) {
  var _useLocation = useLocation(),
      search = _useLocation.search;

  var query = cast(record(string, string), parse(search));
  return cast(spec, query);
}

var RoutedPager = function RoutedPager() {
  var _useLocation = useLocation(),
      pathname = _useLocation.pathname;

  var _useHistory = useHistory(),
      push = _useHistory.push; // tslint:disable-next-line: typedef


  var query = useQuery(opt({
    page: IntFromString
  }));
  var page = query.page ? query.page : 1;
  return React.createElement(Pager, {
    page: page,
    onPageChange: function onPageChange(page) {
      push(pathname + "?" + stringify(_extends({}, query, {
        page: page
      })));
    }
  });
};

var idRT =
/*#__PURE__*/
union([Int, string]);
function apiURLs(_ref) {
  var baseURL = _ref.baseURL,
      resource = _ref.resource;
  var base = chop(baseURL.trim());
  var res = resource.trim();
  verify(base.startsWith('http'));
  verify(!res.includes('/'));
  return {
    all: function all() {
      return base + "/" + res;
    },
    create: function create() {
      return base + "/" + res;
    },
    one: function one(id) {
      cast(idRT, id);
      return base + "/" + res + "/" + id;
    },
    edit: function edit(id) {
      cast(idRT, id);
      return base + "/" + res + "/" + id;
    },
    remove: function remove(id) {
      cast(idRT, id);
      return base + "/" + res + "/" + id;
    }
  };
}

var request = function request(value, promise) {
  try {
    var _decode2 = value.decode;
    return Promise.resolve(promise).then(function (_promise) {
      return toPromise(_decode2.call(value, _promise.data));
    });
  } catch (e) {
    return Promise.reject(e);
  }
};

function api(_ref) {
  var remove = function remove(pid) {
    try {
      return Promise.resolve(request(value, axios["delete"](urls.remove(pid)))).then(function (result) {
        cast(value, result);
        return result;
      });
    } catch (e) {
      return Promise.reject(e);
    }
  };

  var edit = function edit(v) {
    try {
      cast(value, v);
      return Promise.resolve(request(value, axios.put(urls.edit(v.id), v))).then(function (result) {
        cast(value, result);
        return result;
      });
    } catch (e) {
      return Promise.reject(e);
    }
  };

  var create = function create(v) {
    try {
      // @TODO: cast(value without id, v)
      return Promise.resolve(request(value, axios.post(urls.create(), v))).then(function (result) {
        cast(value, result);
        return result;
      });
    } catch (e) {
      return Promise.reject(e);
    }
  };

  var one = function one(pid) {
    try {
      return Promise.resolve(request(value, axios.get(urls.one(pid)))).then(function (result) {
        cast(value, result);
        return result;
      });
    } catch (e) {
      return Promise.reject(e);
    }
  };

  var all = function all() {
    try {
      return Promise.resolve(request(listValue, axios.get(urls.all()))).then(function (result) {
        cast(listValue, result);
        return result;
      });
    } catch (e) {
      return Promise.reject(e);
    }
  };

  var baseURL = _ref.baseURL,
      value = _ref.value,
      id = _ref.id,
      resource = _ref.resource,
      _ref$listValue = _ref.listValue,
      listValue = _ref$listValue === void 0 ? readonlyArray(value) : _ref$listValue,
      _ref$urls = _ref.urls,
      urls = _ref$urls === void 0 ? apiURLs({
    baseURL: baseURL,
    resource: resource
  }) : _ref$urls;
  return {
    baseURL: baseURL,
    resource: resource,
    value: value,
    listValue: listValue,
    urls: urls,
    id: id,
    all: all,
    remove: remove,
    create: create,
    edit: edit,
    one: one
  };
}

function formatDate(date) {
  return date && format(date, 'dd/MM/yyyy');
}
function isFunction(x) {
  return typeof x === 'function';
}

function EditorView(_ref) {
  var data = _ref.data,
      id = _ref.id,
      schema = _ref.schema,
      onSubmit = _ref.onSubmit;
  return React.createElement(Section, null, React.createElement(Simple.Form, {
    validationSchema: schema,
    initialValues: data,
    onSubmit: onSubmit
  }, Object.keys(data).map(function (key) {
    return React.createElement(React.Fragment, {
      key: key
    }, key !== id && (boolean.is(data[key]) ? React.createElement(Simple.Checkbox, {
      name: key
    }) : number.is(data[key]) ? React.createElement(Simple.Number, {
      name: key
    }) : date.is(data[key]) ? React.createElement(Simple.Date, {
      name: key
    }) : React.createElement(Simple.Text, {
      name: key
    })));
  }), React.createElement(Simple.FormButtons, null)));
}
function Editor(_ref2) {
  var data = _ref2.data,
      onSubmit = _ref2.onSubmit,
      id = _ref2.id;

  if (isFunction(data)) {
    return React.createElement(Get, {
      asyncFn: data
    }, function (data) {
      return React.createElement(EditorView, {
        id: id,
        data: data,
        onSubmit: onSubmit
      });
    });
  }

  return React.createElement(EditorView, {
    id: id,
    data: data,
    onSubmit: onSubmit
  });
}

var Header = function Header(_ref) {
  var objectKey = _ref.objectKey;
  return React.createElement(Title, {
    size: "6"
  }, camelCaseToPhrase(objectKey));
};

var Value = function Value(_ref2) {
  var objectValue = _ref2.objectValue;
  return boolean.is(objectValue) ? React.createElement(CheckBox, {
    checked: objectValue,
    readOnly: true
  }) : date.is(objectValue) ? React.createElement(Text, null, formatDate(objectValue)) : React.createElement(React.Fragment, null, objectValue);
};

function ViewerView(_ref3) {
  var data = _ref3.data;
  return React.createElement(Section, null, Object.keys(data).map(function (key) {
    return React.createElement(Columns, {
      key: key
    }, React.createElement(Column, null, React.createElement(Header, {
      objectKey: key
    })), React.createElement(Column, null, React.createElement(Value, {
      objectValue: data[key]
    })));
  }));
}
function Viewer(_ref4) {
  var data = _ref4.data;

  if (isFunction(data)) {
    return React.createElement(Get, {
      asyncFn: data
    }, function (data) {
      return React.createElement(ViewerView, {
        data: data
      });
    });
  }

  return React.createElement(ViewerView, {
    data: data
  });
}

function Views( // cannot pass this to create, as getting type from typeValue is easy,
// not the other way round
typeValue, id) {
  return {
    Create: function Create(_ref) {
      var onSubmit = _ref.onSubmit;
      return React.createElement(Editor, {
        id: id,
        data: empty(typeValue),
        onSubmit: onSubmit
      });
    },
    Edit: function Edit(_ref2) {
      var data = _ref2.data,
          onSubmit = _ref2.onSubmit;
      return React.createElement(Editor, {
        id: id,
        data: data,
        onSubmit: onSubmit
      });
    },
    View: function View(_ref3) {
      var data = _ref3.data;
      return React.createElement(Viewer, {
        data: data
      });
    },
    List: function List(_ref4) {
      var list = _ref4.list,
          onCreate = _ref4.onCreate,
          onEdit = _ref4.onEdit;
      return React.createElement(Container, null, React.createElement(Field, {
        groupModifier: "grouped-right"
      }, React.createElement(Button, {
        variant: "primary",
        onClick: onCreate
      }, "New")), React.createElement(SimpleTable, {
        data: list,
        onRowClicked: onEdit
      }));
    }
  };
}

function components(args) {
  // tslint:disable typedef
  var _args$api = args.api,
      all = _args$api.all,
      one = _args$api.one,
      create = _args$api.create,
      edit = _args$api.edit;
  var value = 'value' in args ? args.value : args.api.value;
  var resource = 'value' in args ? args.resource : args.api.resource;
  var id = 'value' in args ? args.id : args.api.id;
  var CV = args.Views || Views(value, id); // @TODO: only if 'name' is alphanumeric

  var basePath = args.basePath;
  var links$1 = links(resource, basePath);
  var paths$1 = paths(resource, basePath); // tslint:enable typedef

  return {
    List: function List(_ref) {
      var history = _ref.history;
      return React.createElement(CV.List, {
        list: all,
        onEdit: function onEdit(_ref2) {
          var value = _ref2.value;
          return history.push(links$1.edit(value.id));
        },
        onCreate: function onCreate() {
          return history.push(paths$1.create);
        }
      });
    },
    Create: function Create(_ref3) {
      var history = _ref3.history;
      return React.createElement(CV.Create, {
        onSubmit: function (values, actions) {
          try {
            return Promise.resolve(formikSubmit(create)(values, actions)).then(function () {
              history.push(paths$1.list); // @TODO: handle error?
            });
          } catch (e) {
            return Promise.reject(e);
          }
        }
      });
    },
    Edit: function Edit(_ref4) {
      var history = _ref4.history,
          match = _ref4.match;
      return React.createElement(CV.Edit, {
        data: function () {
          try {
            return Promise.resolve(one(match.params.id));
          } catch (e) {
            return Promise.reject(e);
          }
        },
        onSubmit: function (values, actions) {
          try {
            return Promise.resolve(formikSubmit(edit)(values, actions)).then(function () {
              history.push(paths$1.list); // @TODO: handle error?
            });
          } catch (e) {
            return Promise.reject(e);
          }
        }
      });
    },
    View: function View(_ref5) {
      var match = _ref5.match;
      return React.createElement(CV.View, {
        data: function () {
          try {
            return Promise.resolve(one(match.params.id));
          } catch (e) {
            return Promise.reject(e);
          }
        }
      });
    }
  };
}

function Crud(_ref) {
  var basePath = _ref.basePath,
      api = _ref.api,
      _ref$paths = _ref.paths,
      paths$1 = _ref$paths === void 0 ? paths(api.resource, basePath) : _ref$paths,
      _ref$components = _ref.components,
      components$1 = _ref$components === void 0 ? components({
    api: api,
    basePath: basePath
  }) : _ref$components;
  var create = paths$1.create,
      list = paths$1.list,
      edit = paths$1.edit,
      view = paths$1.view;
  var Create = components$1.Create,
      List = components$1.List,
      Edit = components$1.Edit,
      View = components$1.View;
  return React.createElement(Section, null, React.createElement(Switch, null, React.createElement(Route, {
    path: create,
    component: Create
  }), React.createElement(Route, {
    path: edit,
    component: Edit
  }), React.createElement(Route, {
    path: view,
    component: View
  }), React.createElement(Route, {
    path: list,
    component: List
  })));
}

var SimpleCrud = function SimpleCrud(_ref) {
  var _ref$basePath = _ref.basePath,
      basePath = _ref$basePath === void 0 ? '' : _ref$basePath,
      id = _ref.id,
      resource = _ref.resource,
      props = _objectWithoutPropertiesLoose(_ref, ["basePath", "id", "resource"]);

  assert(id !== undefined || 'id' in props.value, 'no id defined');
  return React.createElement(Crud, {
    api: api(_extends({
      id: id,
      resource: resource || props.value.name
    }, props)),
    basePath: basePath
  });
};

export { Actions, All, ButtonLink, ClientQuery, Create, CreateLink, Crud, CrudRoutes, CrudTable, Edit, Editor, EditorView, One, Pager, RoutedPager, SimpleCrud, Viewer, ViewerView, Views, api, base, components, formComponent, formProps, links, listComponent, listProps, paths };
//# sourceMappingURL=devfractal-crud.esm.js.map
