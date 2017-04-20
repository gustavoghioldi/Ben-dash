/**
 * @author v.lugovksy
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.dashboard')
      .controller('DashboardMapCtrl', DashboardMapCtrl);

  /** @ngInject */
  function DashboardMapCtrl(baConfig, layoutPaths) {
    var layoutColors = baConfig.colors;
    var map = AmCharts.makeChart('amChartMap', {
      type: 'map',
      theme: 'blur',
      zoomControl: { zoomControlEnabled: false, panControlEnabled: false },

      dataProvider: {
        map: 'worldLow',
        zoomLevel: 5,
        zoomLongitude: -55,
        zoomLatitude: -37,
        areas: [
          { title: 'Argentina', id: 'AR', color: layoutColors.primary, customData: '1 244', groupId: '1'},
          { title: 'Brazil', id: 'BR', color: layoutColors.warning, customData: '11 598', groupId: '1'},
          { title: 'Paraguay', id: 'PY', color: layoutColors.success, customData: '3 566', groupId: '1'},
          { title: 'Uruguay', id: 'UY', color: layoutColors.danger, customData: '345', groupId: '1'},
          { title: 'Chile', id: 'CL', color: layoutColors.primary, customData: '985', groupId: '1'},
          
        ]
      },

      areasSettings: {
        rollOverOutlineColor: layoutColors.border,
        rollOverColor: layoutColors.primaryDark,
        alpha: 0.8,
        unlistedAreasAlpha: 0.2,
        unlistedAreasColor: layoutColors.defaultText,
        balloonText: '[[title]]: [[customData]] users'
      },


      legend: {
        width: '100%',
        marginRight: 27,
        marginLeft: 27,
        equalWidths: false,
        backgroundAlpha: 0.3,
        backgroundColor: layoutColors.border,
        borderColor: layoutColors.border,
        borderAlpha: 1,
        top: 362,
        left: 0,
        horizontalGap: 10,
        data: [
          {
            title: 'over 1 000 users',
            color: layoutColors.primary
          },
          {
            title: '500 - 1 000 users',
            color: layoutColors.successLight
          },
          {
            title: '100 - 500 users',
            color: layoutColors.success
          },
          {
            title: '0 - 100 users',
            color: layoutColors.danger
          }
        ]
      },
      export: {
        enabled: true
      },
      creditsPosition: 'bottom-right',
      pathToImages: layoutPaths.images.amChart
    });
  }
})();