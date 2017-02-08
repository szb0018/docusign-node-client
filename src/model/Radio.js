(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define([undefined, './ErrorDetails'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(undefined, require('./ErrorDetails'));
  } else {
    // Browser globals (root is window)
    if (!root.Docusign) {
      root.Docusign = {};
    }
    factory(root.Docusign, root.Docusign.ErrorDetails);
  }
}(this, function(module, ErrorDetails) {
  'use strict';

  
  

  
  var Radio = function Radio() { 
    var self = this;
    

    self.constructFromObject = function(data) {
      if (!data) {
        return;
      }
      
      if (data.pageNumber) {
        self.pageNumber = data.pageNumber;
      }
      
      if (data.xPosition) {
        self.xPosition = data.xPosition;
      }
      
      if (data.yPosition) {
        self.yPosition = data.yPosition;
      }
      
      if (data.anchorString) {
        self.anchorString = data.anchorString;
      }
      
      if (data.anchorXOffset) {
        self.anchorXOffset = data.anchorXOffset;
      }
      
      if (data.anchorYOffset) {
        self.anchorYOffset = data.anchorYOffset;
      }
      
      if (data.anchorUnits) {
        self.anchorUnits = data.anchorUnits;
      }
      
      if (data.anchorIgnoreIfNotPresent) {
        self.anchorIgnoreIfNotPresent = data.anchorIgnoreIfNotPresent;
      }
      
      if (data.anchorCaseSensitive) {
        self.anchorCaseSensitive = data.anchorCaseSensitive;
      }
      
      if (data.anchorMatchWholeWord) {
        self.anchorMatchWholeWord = data.anchorMatchWholeWord;
      }
      
      if (data.anchorHorizontalAlignment) {
        self.anchorHorizontalAlignment = data.anchorHorizontalAlignment;
      }
      
      if (data.value) {
        self.value = data.value;
      }
      
      if (data.selected) {
        self.selected = data.selected;
      }
      
      if (data.tabId) {
        self.tabId = data.tabId;
      }
      
      if (data.required) {
        self.required = data.required;
      }
      
      if (data.locked) {
        self.locked = data.locked;
      }
      
      if (data.errorDetails) {
        self.errorDetails = new ErrorDetails();
        self.errorDetails.constructFromObject(data.errorDetails);
      }
      
    }

    
    /**
     * get Specifies the page number on which the tab is located.
     * @return {String}
     **/
    self.getPageNumber = function() {
      return self.pageNumber;
    }

    /**
     * set Specifies the page number on which the tab is located.
     * @param {String} pageNumber
     **/
    self.setPageNumber = function (pageNumber) {
      self.pageNumber = pageNumber;
    }
    
    /**
     * get This indicates the horizontal offset of the object on the page. DocuSign uses 72 DPI when determining position.
     * @return {String}
     **/
    self.getXPosition = function() {
      return self.xPosition;
    }

    /**
     * set This indicates the horizontal offset of the object on the page. DocuSign uses 72 DPI when determining position.
     * @param {String} xPosition
     **/
    self.setXPosition = function (xPosition) {
      self.xPosition = xPosition;
    }
    
    /**
     * get This indicates the vertical offset of the object on the page. DocuSign uses 72 DPI when determining position.
     * @return {String}
     **/
    self.getYPosition = function() {
      return self.yPosition;
    }

    /**
     * set This indicates the vertical offset of the object on the page. DocuSign uses 72 DPI when determining position.
     * @param {String} yPosition
     **/
    self.setYPosition = function (yPosition) {
      self.yPosition = yPosition;
    }
    
    /**
     * get Anchor text information for a radio button.
     * @return {String}
     **/
    self.getAnchorString = function() {
      return self.anchorString;
    }

    /**
     * set Anchor text information for a radio button.
     * @param {String} anchorString
     **/
    self.setAnchorString = function (anchorString) {
      self.anchorString = anchorString;
    }
    
    /**
     * get Specifies the X axis location of the tab, in achorUnits, relative to the anchorString.
     * @return {String}
     **/
    self.getAnchorXOffset = function() {
      return self.anchorXOffset;
    }

    /**
     * set Specifies the X axis location of the tab, in achorUnits, relative to the anchorString.
     * @param {String} anchorXOffset
     **/
    self.setAnchorXOffset = function (anchorXOffset) {
      self.anchorXOffset = anchorXOffset;
    }
    
    /**
     * get Specifies the Y axis location of the tab, in achorUnits, relative to the anchorString.
     * @return {String}
     **/
    self.getAnchorYOffset = function() {
      return self.anchorYOffset;
    }

    /**
     * set Specifies the Y axis location of the tab, in achorUnits, relative to the anchorString.
     * @param {String} anchorYOffset
     **/
    self.setAnchorYOffset = function (anchorYOffset) {
      self.anchorYOffset = anchorYOffset;
    }
    
    /**
     * get Specifies units of the X and Y offset. Units could be pixels, millimeters, centimeters, or inches.
     * @return {String}
     **/
    self.getAnchorUnits = function() {
      return self.anchorUnits;
    }

    /**
     * set Specifies units of the X and Y offset. Units could be pixels, millimeters, centimeters, or inches.
     * @param {String} anchorUnits
     **/
    self.setAnchorUnits = function (anchorUnits) {
      self.anchorUnits = anchorUnits;
    }
    
    /**
     * get When set to **true**, this tab is ignored if anchorString is not found in the document.
     * @return {String}
     **/
    self.getAnchorIgnoreIfNotPresent = function() {
      return self.anchorIgnoreIfNotPresent;
    }

    /**
     * set When set to **true**, this tab is ignored if anchorString is not found in the document.
     * @param {String} anchorIgnoreIfNotPresent
     **/
    self.setAnchorIgnoreIfNotPresent = function (anchorIgnoreIfNotPresent) {
      self.anchorIgnoreIfNotPresent = anchorIgnoreIfNotPresent;
    }
    
    /**
     * get When set to **true**, the anchor string does not consider case when matching strings in the document. The default value is **true**.
     * @return {String}
     **/
    self.getAnchorCaseSensitive = function() {
      return self.anchorCaseSensitive;
    }

    /**
     * set When set to **true**, the anchor string does not consider case when matching strings in the document. The default value is **true**.
     * @param {String} anchorCaseSensitive
     **/
    self.setAnchorCaseSensitive = function (anchorCaseSensitive) {
      self.anchorCaseSensitive = anchorCaseSensitive;
    }
    
    /**
     * get When set to **true**, the anchor string in this tab matches whole words only (strings embedded in other strings are ignored.) The default value is **true**.
     * @return {String}
     **/
    self.getAnchorMatchWholeWord = function() {
      return self.anchorMatchWholeWord;
    }

    /**
     * set When set to **true**, the anchor string in this tab matches whole words only (strings embedded in other strings are ignored.) The default value is **true**.
     * @param {String} anchorMatchWholeWord
     **/
    self.setAnchorMatchWholeWord = function (anchorMatchWholeWord) {
      self.anchorMatchWholeWord = anchorMatchWholeWord;
    }
    
    /**
     * get Specifies the alignment of anchor tabs with anchor strings. Possible values are **left** or **right**. The default value is **left**.
     * @return {String}
     **/
    self.getAnchorHorizontalAlignment = function() {
      return self.anchorHorizontalAlignment;
    }

    /**
     * set Specifies the alignment of anchor tabs with anchor strings. Possible values are **left** or **right**. The default value is **left**.
     * @param {String} anchorHorizontalAlignment
     **/
    self.setAnchorHorizontalAlignment = function (anchorHorizontalAlignment) {
      self.anchorHorizontalAlignment = anchorHorizontalAlignment;
    }
    
    /**
     * get Specifies the value of the tab.
     * @return {String}
     **/
    self.getValue = function() {
      return self.value;
    }

    /**
     * set Specifies the value of the tab.
     * @param {String} value
     **/
    self.setValue = function (value) {
      self.value = value;
    }
    
    /**
     * get When set to **true**, the radio button is selected.
     * @return {String}
     **/
    self.getSelected = function() {
      return self.selected;
    }

    /**
     * set When set to **true**, the radio button is selected.
     * @param {String} selected
     **/
    self.setSelected = function (selected) {
      self.selected = selected;
    }
    
    /**
     * get The unique identifier for the tab. The tabid can be retrieved with the [ML:GET call].
     * @return {String}
     **/
    self.getTabId = function() {
      return self.tabId;
    }

    /**
     * set The unique identifier for the tab. The tabid can be retrieved with the [ML:GET call].
     * @param {String} tabId
     **/
    self.setTabId = function (tabId) {
      self.tabId = tabId;
    }
    
    /**
     * get When set to **true**, the signer is required to fill out this tab
     * @return {String}
     **/
    self.getRequired = function() {
      return self.required;
    }

    /**
     * set When set to **true**, the signer is required to fill out this tab
     * @param {String} required
     **/
    self.setRequired = function (required) {
      self.required = required;
    }
    
    /**
     * get When set to **true**, the signer cannot change the data of the custom tab.
     * @return {String}
     **/
    self.getLocked = function() {
      return self.locked;
    }

    /**
     * set When set to **true**, the signer cannot change the data of the custom tab.
     * @param {String} locked
     **/
    self.setLocked = function (locked) {
      self.locked = locked;
    }
    
    /**
     * @return {ErrorDetails}
     **/
    self.getErrorDetails = function() {
      return self.errorDetails;
    }

    /**
     * @param {ErrorDetails} errorDetails
     **/
    self.setErrorDetails = function (errorDetails) {
      self.errorDetails = errorDetails;
    }
    

    self.toJson = function () {
      return JSON.stringify(self);
    }
  };

  if (module) {
    module.Radio = Radio;
  }

  return Radio;
  
  
}));
