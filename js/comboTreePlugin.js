!(function (e, t, o, s) {
  var n = "comboTree",
    r = { source: [], isMultiple: !1 };
  function l(t, o) {
    (this.elemInput = t),
      (this._elemInput = e(t)),
      (this.options = e.extend({}, r, o)),
      (this._defaults = r),
      (this._name = n),
      this.init();
  }
  (l.prototype.init = function () {
    (this.comboTreeId = "comboTree" + Math.floor(999999 * Math.random())),
      this._elemInput.addClass("comboTreeInputBox"),
      void 0 === this._elemInput.attr("id") &&
        this._elemInput.attr("id", this.comboTreeId + "Input"),
      (this.elemInputId = this._elemInput.attr("id")),
      this._elemInput.wrap(
        '<div id="' +
          this.comboTreeId +
          'Wrapper" class="comboTreeWrapper"></div>'
      ),
      this._elemInput.wrap(
        '<div id="' +
          this.comboTreeId +
          'InputWrapper" class="comboTreeInputWrapper"></div>'
      ),
      (this._elemWrapper = e("#" + this.comboTreeId + "Wrapper")),
      (this._elemArrowBtn = e(
        '<button id="' +
          this.comboTreeId +
          'ArrowBtn" class="comboTreeArrowBtn"><span class="comboTreeArrowBtnImg"><i class="fa fa-angle-down second_icon"></i></span></button>'
      )),
      this._elemInput.after(this._elemArrowBtn),
      this._elemWrapper.append(
        '<div id="' +
          this.comboTreeId +
          'DropDownContainer" class="comboTreeDropDownContainer"><div class="comboTreeDropDownContent"></div>'
      ),
      (this._elemDropDownContainer = e(
        "#" + this.comboTreeId + "DropDownContainer"
      )),
      this._elemDropDownContainer.html(this.createSourceHTML()),
      (this._elemItems = this._elemDropDownContainer.find("li")),
      (this._elemItemsTitle = this._elemDropDownContainer.find(
        "span.comboTreeItemTitle"
      )),
      (this._selectedItem = {}),
      (this._selectedItems = []),
      this.bindings();
  }),
    (l.prototype.removeSourceHTML = function () {
      this._elemDropDownContainer.html("");
    }),
    (l.prototype.createSourceHTML = function () {
      return this.createSourceSubItemsHTML(this.options.source);
    }),
    (l.prototype.createSourceSubItemsHTML = function (e) {
      for (var t = "<UL>", o = 0; o < e.length; o++)
        t += this.createSourceItemHTML(e[o]);
      return (t += "</UL>");
    }),
    (l.prototype.createSourceItemHTML = function (e) {
      var t = "",
        o = e.hasOwnProperty("subs");
      return (
        (t = '<LI class="ComboTreeItem' + (o ? "Parent" : "Chlid") + '"> '),
        o && (t += '<span class="comboTreeParentPlus">&minus;</span>'),
        this.options.isMultiple
          ? (t +=
              '<span data-id="' +
              e.id +
              '" class="comboTreeItemTitle"><input type="checkbox">' +
              e.title +
              "</span>")
          : (t +=
              '<span data-id="' +
              e.id +
              '" class="comboTreeItemTitle">' +
              e.title +
              "</span>"),
        o && (t += this.createSourceSubItemsHTML(e.subs)),
        (t += "</LI>")
      );
    }),
    (l.prototype.bindings = function () {
      var t = this;
      this._elemArrowBtn.on("click", function (e) {
        e.stopPropagation(), t.toggleDropDown();
      }),
        this._elemInput.on("click", function (e) {
          e.stopPropagation(),
            t._elemDropDownContainer.is(":visible") || t.toggleDropDown();
        }),
        this._elemItems.on("click", function (o) {
          o.stopPropagation(),
            e(this).hasClass("ComboTreeItemParent") &&
              t.toggleSelectionTree(this);
        }),
        this._elemItemsTitle.on("click", function (e) {
          e.stopPropagation(),
            t.options.isMultiple
              ? t.multiItemClick(this)
              : t.singleItemClick(this);
        }),
        this._elemItemsTitle.on("mousemove", function (e) {
          e.stopPropagation(), t.dropDownMenuHover(this);
        }),
        this._elemInput.on("keyup", function (e) {
          switch ((e.stopPropagation(), e.keyCode)) {
            case 27:
              t.closeDropDownMenu();
              break;
            case 13:
            case 39:
            case 37:
            case 40:
            case 38:
              e.preventDefault();
              break;
            default:
              t.options.isMultiple || t.filterDropDownMenu();
          }
        }),
        e(o).on("mouseup." + t.comboTreeId, function (e) {
          !t._elemWrapper.is(e.target) &&
            0 === t._elemWrapper.has(e.target).length &&
            t._elemDropDownContainer.is(":visible") &&
            t.closeDropDownMenu();
        });
    }),
    (l.prototype.toggleDropDown = function () {
      this._elemDropDownContainer.slideToggle(50), this._elemInput.focus();
    }),
    (l.prototype.closeDropDownMenu = function () {
      this._elemDropDownContainer.slideUp(50);
    }),
    (l.prototype.toggleSelectionTree = function (t, o) {
      var i = e(t).children("ul")[0];
      void 0 === o
        ? (e(i).is(":visible")
            ? e(t).children("span.comboTreeParentPlus").html("+")
            : e(t).children("span.comboTreeParentPlus").html("&minus;"),
          e(i).slideToggle(50))
        : 1 != o || e(i).is(":visible")
        ? -1 == o &&
          (e(i).is(":visible")
            ? (e(t).children("span.comboTreeParentPlus").html("+"),
              e(i).slideUp(50))
            : this.dropDownMenuHoverToParentItem(t))
        : (e(t).children("span.comboTreeParentPlus").html("&minus;"),
          e(i).slideDown(50));
    }),
    (l.prototype.singleItemClick = function (t) {
      (this._selectedItem = { id: e(t).attr("data-id"), title: e(t).text() }),
        this.refreshInputVal(),
        this.closeDropDownMenu();
    }),
    (l.prototype.multiItemClick = function (t) {
      this._selectedItem = { id: e(t).attr("data-id"), title: e(t).text() };
      var o = this.isItemInArray(this._selectedItem, this._selectedItems);
      o
        ? (this._selectedItems.splice(parseInt(o), 1),
          e(t).find("input").prop("checked", !1))
        : (this._selectedItems.push(this._selectedItem),
          e(t).find("input").prop("checked", !0)),
        this.refreshInputVal();
    }),
    (l.prototype.isItemInArray = function (e, t) {
      for (var o = 0; o < t.length; o++)
        if (e.id == t[o].id && e.title == t[o].title) return o + "";
      return !1;
    }),
    (l.prototype.refreshInputVal = function () {
      var e = "";
      if (this.options.isMultiple)
        for (var t = 0; t < this._selectedItems.length; t++)
          (e += this._selectedItems[t].title),
            t < this._selectedItems.length - 1 && (e += ", ");
      else e = this._selectedItem.title;
      this._elemInput.val(e);
    }),
    (l.prototype.dropDownMenuHover = function (t, o) {
      this._elemItems
        .find("span.comboTreeItemHover")
        .removeClass("comboTreeItemHover"),
        e(t).addClass("comboTreeItemHover"),
        (this._elemHoveredItem = e(t)),
        o && this.dropDownScrollToHoveredItem(this._elemHoveredItem);
    }),
    (l.prototype.dropDownScrollToHoveredItem = function (t) {
      var o = this._elemDropDownContainer.scrollTop();
      this._elemDropDownContainer.scrollTop(
        o + e(t).parent().position().top - 80
      );
    }),
    (l.prototype.dropDownMenuHoverToParentItem = function (t) {
      var o = e(e(t).parents("li.ComboTreeItemParent")[0]).children(
        "span.comboTreeItemTitle"
      );
      o.length
        ? this.dropDownMenuHover(o, !0)
        : this.dropDownMenuHover(this._elemItemsTitle[0], !0);
    }),
    (l.prototype.dropDownInputKeyToggleTreeControl = function (t) {
      var o = this._elemHoveredItem;
      e(o).parent("li").hasClass("ComboTreeItemParent")
        ? this.toggleSelectionTree(e(o).parent("li"), t)
        : -1 == t && this.dropDownMenuHoverToParentItem(o);
    }),
    (l.prototype.dropDownInputKeyControl = function (e) {
      this._elemDropDownContainer.is(":visible") || this.toggleDropDown();
      var t = this._elemItems.find("span.comboTreeItemTitle:visible");
      (i = this._elemHoveredItem ? t.index(this._elemHoveredItem) + e : 0),
        (i = (t.length + i) % t.length),
        this.dropDownMenuHover(t[i], !0);
    }),
    (l.prototype.filterDropDownMenu = function () {
      "" != this._elemInput.val()
        ? (this._elemItemsTitle.hide(),
          this._elemItemsTitle.siblings("span.comboTreeParentPlus").hide(),
          (list = this._elemItems
            .find("span:icontains('" + this._elemInput.val() + "')")
            .each(function (t, o) {
              e(this).show(),
                e(this).siblings("span.comboTreeParentPlus").show();
            })))
        : (this._elemItemsTitle.show(),
          this._elemItemsTitle.siblings("span.comboTreeParentPlus").show());
    }),
    (l.prototype.getSelectedItemsId = function () {
      if (this.options.isMultiple && this._selectedItems.length > 0) {
        var e = [];
        for (i = 0; i < this._selectedItems.length; i++)
          e.push(this._selectedItems[i].id);
        return e;
      }
      return (
        !(
          this.options.isMultiple || !this._selectedItem.hasOwnProperty("id")
        ) && this._selectedItem.id
      );
    }),
    (l.prototype.getSelectedItemsTitle = function () {
      if (this.options.isMultiple && this._selectedItems.length > 0) {
        var e = [];
        for (i = 0; i < this._selectedItems.length; i++)
          e.push(this._selectedItems[i].title);
        return e;
      }
      return (
        !(
          this.options.isMultiple || !this._selectedItem.hasOwnProperty("id")
        ) && this._selectedItem.title
      );
    }),
    (l.prototype.unbind = function () {
      this._elemArrowBtn.off("click"),
        this._elemInput.off("click"),
        this._elemItems.off("click"),
        this._elemItemsTitle.off("click"),
        this._elemItemsTitle.off("mousemove"),
        this._elemInput.off("keyup"),
        this._elemInput.off("keydown"),
        this._elemInput.off("mouseup." + this.comboTreeId),
        e(o).off("mouseup." + this.comboTreeId);
    }),
    (l.prototype.destroy = function () {
      this.unbind(),
        this._elemWrapper.before(this._elemInput),
        this._elemWrapper.remove(),
        this._elemInput.removeData("plugin_" + n);
    }),
    (e.fn[n] = function (t) {
      var o = [];
      return (
        this.each(function () {
          e.data(this, "plugin_" + n) ||
            (e.data(this, "plugin_" + n, new l(this, t)),
            o.push(e(this).data()["plugin_" + n]));
        }),
        1 == this.length ? o[0] : o
      );
    });
})(jQuery, window, document);
