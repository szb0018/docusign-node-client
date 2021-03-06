(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define([undefined, './RecipientEmailNotification', './Tabs'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(undefined, require('./RecipientEmailNotification'), require('./Tabs'));
  } else {
    // Browser globals (root is window)
    if (!root.Docusign) {
      root.Docusign = {};
    }
    factory(root.Docusign, root.Docusign.RecipientEmailNotification, root.Docusign.Tabs);
  }
}(this, function(module, RecipientEmailNotification, Tabs) {
  'use strict';

  
  

  
  var TemplateRole = function TemplateRole() { 
    var self = this;
    

    self.constructFromObject = function(data) {
      if (!data) {
        return;
      }
      
      if (data.email) {
        self.email = data.email;
      }
      
      if (data.roleName) {
        self.roleName = data.roleName;
      }
      
      if (data.name) {
        self.name = data.name;
      }
      
      if (data.signingGroupId) {
        self.signingGroupId = data.signingGroupId;
      }
      
      if (data.inPersonSignerName) {
        self.inPersonSignerName = data.inPersonSignerName;
      }
      
      if (data.clientUserId) {
        self.clientUserId = data.clientUserId;
      }
      
      if (data.embeddedRecipientStartURL) {
        self.embeddedRecipientStartURL = data.embeddedRecipientStartURL;
      }
      
      if (data.defaultRecipient) {
        self.defaultRecipient = data.defaultRecipient;
      }
      
      if (data.accessCode) {
        self.accessCode = data.accessCode;
      }
      
      if (data.routingOrder) {
        self.routingOrder = data.routingOrder;
      }
      
      if (data.emailNotification) {
        self.emailNotification = new RecipientEmailNotification();
        self.emailNotification.constructFromObject(data.emailNotification);
      }
      
      if (data.tabs) {
        self.tabs = new Tabs();
        self.tabs.constructFromObject(data.tabs);
      }
      
    }

    
    /**
     * get Specifies the email associated with a role name.
     * @return {String}
     **/
    self.getEmail = function() {
      return self.email;
    }

    /**
     * set Specifies the email associated with a role name.
     * @param {String} email
     **/
    self.setEmail = function (email) {
      self.email = email;
    }
    
    /**
     * get Optional element. Specifies the role name associated with the recipient.<br/><br/>This is required when working with template recipients.
     * @return {String}
     **/
    self.getRoleName = function() {
      return self.roleName;
    }

    /**
     * set Optional element. Specifies the role name associated with the recipient.<br/><br/>This is required when working with template recipients.
     * @param {String} roleName
     **/
    self.setRoleName = function (roleName) {
      self.roleName = roleName;
    }
    
    /**
     * get Specifies the recipient's name.
     * @return {String}
     **/
    self.getName = function() {
      return self.name;
    }

    /**
     * set Specifies the recipient's name.
     * @param {String} name
     **/
    self.setName = function (name) {
      self.name = name;
    }
    
    /**
     * get When set to **true** and the feature is enabled in the sender's account, the signing recipient is required to draw signatures and initials at each signature/initial tab ( instead of adopting a signature/initial style or only drawing a signature/initial once).
     * @return {String}
     **/
    self.getSigningGroupId = function() {
      return self.signingGroupId;
    }

    /**
     * set When set to **true** and the feature is enabled in the sender's account, the signing recipient is required to draw signatures and initials at each signature/initial tab ( instead of adopting a signature/initial style or only drawing a signature/initial once).
     * @param {String} signingGroupId
     **/
    self.setSigningGroupId = function (signingGroupId) {
      self.signingGroupId = signingGroupId;
    }
    
    /**
     * get Specifies the full legal name of the signer in person signer template roles.\n\nMaximum Length: 100 characters.
     * @return {String}
     **/
    self.getInPersonSignerName = function() {
      return self.inPersonSignerName;
    }

    /**
     * set Specifies the full legal name of the signer in person signer template roles.\n\nMaximum Length: 100 characters.
     * @param {String} inPersonSignerName
     **/
    self.setInPersonSignerName = function (inPersonSignerName) {
      self.inPersonSignerName = inPersonSignerName;
    }
    
    /**
     * get Specifies whether the recipient is embedded or remote. \n\nIf the `clientUserId` property is not null then the recipient is embedded. Note that if the `ClientUserId` property is set and either `SignerMustHaveAccount` or `SignerMustLoginToSign` property of the account settings is set to  **true**, an error is generated on sending.ng. \n\nMaximum length: 100 characters.
     * @return {String}
     **/
    self.getClientUserId = function() {
      return self.clientUserId;
    }

    /**
     * set Specifies whether the recipient is embedded or remote. \n\nIf the `clientUserId` property is not null then the recipient is embedded. Note that if the `ClientUserId` property is set and either `SignerMustHaveAccount` or `SignerMustLoginToSign` property of the account settings is set to  **true**, an error is generated on sending.ng. \n\nMaximum length: 100 characters.
     * @param {String} clientUserId
     **/
    self.setClientUserId = function (clientUserId) {
      self.clientUserId = clientUserId;
    }
    
    /**
     * get Specifies a sender provided valid URL string for redirecting an embedded recipient. When using this option, the embedded recipient still receives an email from DocuSign, just as a remote recipient would. When the document link in the email is clicked the recipient is redirected, through DocuSign, to the supplied URL to complete their actions. When routing to the URL, the sender’s system (the server responding to the URL) must request a recipient token to launch a signing session. \n\nIf set to `SIGN_AT_DOCUSIGN`, the recipient is directed to an embedded signing or viewing process directly at DocuSign. The signing or viewing action is initiated by the DocuSign system and the transaction activity and Certificate of Completion records will reflect this. In all other ways the process is identical to an embedded signing or viewing operation that is launched by any partner.\n\nIt is important to remember that in a typical embedded workflow the authentication of an embedded recipient is the responsibility of the sending application, DocuSign expects that senders will follow their own process for establishing the recipient’s identity. In this workflow the recipient goes through the sending application before the embedded signing or viewing process in initiated. However, when the sending application sets `EmbeddedRecipientStartURL=SIGN_AT_DOCUSIGN`, the recipient goes directly to the embedded signing or viewing process bypassing the sending application and any authentication steps the sending application would use. In this case, DocuSign recommends that you use one of the normal DocuSign authentication features (Access Code, Phone Authentication, SMS Authentication, etc.) to verify the identity of the recipient.\n\nIf the `clientUserId` property is NOT set, and the `embeddedRecipientStartURL` is set, DocuSign will ignore the redirect URL and launch the standard signing process for the email recipient. Information can be appended to the embedded recipient start URL using merge fields. The available merge fields items are: envelopeId, recipientId, recipientName, recipientEmail, and customFields. The `customFields` property must be set fort the recipient or envelope. The merge fields are enclosed in double brackets. \n\n*Example*: \n\n`http://senderHost/[[mergeField1]]/ beginSigningSession? [[mergeField2]]&[[mergeField3]]`
     * @return {String}
     **/
    self.getEmbeddedRecipientStartURL = function() {
      return self.embeddedRecipientStartURL;
    }

    /**
     * set Specifies a sender provided valid URL string for redirecting an embedded recipient. When using this option, the embedded recipient still receives an email from DocuSign, just as a remote recipient would. When the document link in the email is clicked the recipient is redirected, through DocuSign, to the supplied URL to complete their actions. When routing to the URL, the sender’s system (the server responding to the URL) must request a recipient token to launch a signing session. \n\nIf set to `SIGN_AT_DOCUSIGN`, the recipient is directed to an embedded signing or viewing process directly at DocuSign. The signing or viewing action is initiated by the DocuSign system and the transaction activity and Certificate of Completion records will reflect this. In all other ways the process is identical to an embedded signing or viewing operation that is launched by any partner.\n\nIt is important to remember that in a typical embedded workflow the authentication of an embedded recipient is the responsibility of the sending application, DocuSign expects that senders will follow their own process for establishing the recipient’s identity. In this workflow the recipient goes through the sending application before the embedded signing or viewing process in initiated. However, when the sending application sets `EmbeddedRecipientStartURL=SIGN_AT_DOCUSIGN`, the recipient goes directly to the embedded signing or viewing process bypassing the sending application and any authentication steps the sending application would use. In this case, DocuSign recommends that you use one of the normal DocuSign authentication features (Access Code, Phone Authentication, SMS Authentication, etc.) to verify the identity of the recipient.\n\nIf the `clientUserId` property is NOT set, and the `embeddedRecipientStartURL` is set, DocuSign will ignore the redirect URL and launch the standard signing process for the email recipient. Information can be appended to the embedded recipient start URL using merge fields. The available merge fields items are: envelopeId, recipientId, recipientName, recipientEmail, and customFields. The `customFields` property must be set fort the recipient or envelope. The merge fields are enclosed in double brackets. \n\n*Example*: \n\n`http://senderHost/[[mergeField1]]/ beginSigningSession? [[mergeField2]]&[[mergeField3]]`
     * @param {String} embeddedRecipientStartURL
     **/
    self.setEmbeddedRecipientStartURL = function (embeddedRecipientStartURL) {
      self.embeddedRecipientStartURL = embeddedRecipientStartURL;
    }
    
    /**
     * get When set to **true**, this recipient is the default recipient and any tabs generated by the transformPdfFields option are mapped to this recipient.
     * @return {String}
     **/
    self.getDefaultRecipient = function() {
      return self.defaultRecipient;
    }

    /**
     * set When set to **true**, this recipient is the default recipient and any tabs generated by the transformPdfFields option are mapped to this recipient.
     * @param {String} defaultRecipient
     **/
    self.setDefaultRecipient = function (defaultRecipient) {
      self.defaultRecipient = defaultRecipient;
    }
    
    /**
     * get If a value is provided, the recipient must enter the value as the access code to view and sign the envelope. \n\nMaximum Length: 50 characters and must conform to account’s access code format setting.\n\nIf blank, but the signer `accessCode` property is set in the envelope, then that value is used.\n\nIf blank and the signer `accessCode` property is not set, then access code is not required.
     * @return {String}
     **/
    self.getAccessCode = function() {
      return self.accessCode;
    }

    /**
     * set If a value is provided, the recipient must enter the value as the access code to view and sign the envelope. \n\nMaximum Length: 50 characters and must conform to account’s access code format setting.\n\nIf blank, but the signer `accessCode` property is set in the envelope, then that value is used.\n\nIf blank and the signer `accessCode` property is not set, then access code is not required.
     * @param {String} accessCode
     **/
    self.setAccessCode = function (accessCode) {
      self.accessCode = accessCode;
    }
    
    /**
     * get Specifies the routing order of the recipient in the envelope.
     * @return {String}
     **/
    self.getRoutingOrder = function() {
      return self.routingOrder;
    }

    /**
     * set Specifies the routing order of the recipient in the envelope.
     * @param {String} routingOrder
     **/
    self.setRoutingOrder = function (routingOrder) {
      self.routingOrder = routingOrder;
    }
    
    /**
     * @return {RecipientEmailNotification}
     **/
    self.getEmailNotification = function() {
      return self.emailNotification;
    }

    /**
     * @param {RecipientEmailNotification} emailNotification
     **/
    self.setEmailNotification = function (emailNotification) {
      self.emailNotification = emailNotification;
    }
    
    /**
     * @return {Tabs}
     **/
    self.getTabs = function() {
      return self.tabs;
    }

    /**
     * @param {Tabs} tabs
     **/
    self.setTabs = function (tabs) {
      self.tabs = tabs;
    }
    

    self.toJson = function () {
      return JSON.stringify(self);
    }
  };

  if (module) {
    module.TemplateRole = TemplateRole;
  }

  return TemplateRole;
  
  
}));
