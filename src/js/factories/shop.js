angular
  .module('charityApp')
  .factory('Shop', Shop);

Shop.$inject = [
  '$resource',
  'API'
];
function Shop(
  $resource,
  API){
  return $resource(`${API}/shops/:id`, { id: '@_id'}, {
    'update': { method: 'PUT' }
  });
}
