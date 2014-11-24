Package.describe({
  summary: "A package that provides a the for the meteor-blog",
  version: "0.0.1",
  name: "meteor-blog-fastr-theme",
  git: "https://github.com/idmontie/meteor-blog-fastr-theme.git"
});

Package.onUse(function(api) {
  api.versionsFrom('METEOR@0.9.0');

  var both = ['client'];

  // PACKAGES FOR CLIENT

  api.use([
    'less'
  ], 'client');

  // FILES FOR CLIENT

  api.addFiles([
    'client/less/fastr.less',
  ], 'client');

});
