(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define([undefined, './Expirations', './Reminders'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(undefined, require('./Expirations'), require('./Reminders'));
  } else {
    // Browser globals (root is window)
    if (!root.Docusign) {
      root.Docusign = {};
    }
    factory(root.Docusign, root.Docusign.Expirations, root.Docusign.Reminders);
  }
}(this, function(module, Expirations, Reminders) {
  'use strict';

  
  

  
  var Notification = function Notification() { 
    var self = this;
    
    /**
     * When set to **true**, the account default notification settings are used for the envelope.
     * datatype: String
     **/
    self.useAccountDefaults = null;
    
    /**
     * datatype: Reminders
     **/
    self.reminders = null;
    
    /**
     * datatype: Expirations
     **/
    self.expirations = null;
    

    self.constructFromObject = function(data) {
      if (!data) {
        return;
      }
      
      if (data.useAccountDefaults) {
        self.useAccountDefaults = data.useAccountDefaults;
      }
      
      if (data.reminders) {
        self.reminders = new Reminders();
        self.reminders.constructFromObject(data.reminders);
      }
      
      if (data.expirations) {
        self.expirations = new Expirations();
        self.expirations.constructFromObject(data.expirations);
      }
      
    }

    
    /**
     * get When set to **true**, the account default notification settings are used for the envelope.
     * @return {String}
     **/
    self.getUseAccountDefaults = function() {
      return self.useAccountDefaults;
    }

    /**
     * set When set to **true**, the account default notification settings are used for the envelope.
     * @param {String} useAccountDefaults
     **/
    self.setUseAccountDefaults = function (useAccountDefaults) {
      self.useAccountDefaults = useAccountDefaults;
    }
    
    /**
     * @return {Reminders}
     **/
    self.getReminders = function() {
      return self.reminders;
    }

    /**
     * @param {Reminders} reminders
     **/
    self.setReminders = function (reminders) {
      self.reminders = reminders;
    }
    
    /**
     * @return {Expirations}
     **/
    self.getExpirations = function() {
      return self.expirations;
    }

    /**
     * @param {Expirations} expirations
     **/
    self.setExpirations = function (expirations) {
      self.expirations = expirations;
    }
    

    self.toJson = function () {
      return JSON.stringify(self);
    }
  };

  if (module) {
    module.Notification = Notification;
  }

  return Notification;
  
  
}));
