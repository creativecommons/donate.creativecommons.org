(function($, _) {
  if (!CRM.ProfileSelector) CRM.ProfileSelector = {};

  CRM.ProfileSelector.DummyModel = CRM.Backbone.Model.extend({
    defaults: {
      profile_id: null
    }
  });
})(CRM.$, CRM._);
