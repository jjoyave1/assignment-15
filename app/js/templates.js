this["template"] = this["template"] || {};
this["template"]["todolist"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
    var helper;

  return "\n    <a href='#'><li>"
    + this.escapeExpression(((helper = (helper = helpers.task || (depth0 != null ? depth0.task : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"task","hash":{},"data":data}) : helper)))
    + "</li></a>\n\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1;

  return "<ul>\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.data : depth0),{"name":"each","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "</ul>\n";
},"useData":true});