$('#registerTablet').bootstrapValidator({
    feedbackIcons: {
        valid: 'glyphicon glyphicon-ok',
        invalid: 'glyphicon glyphicon-remove',
        validating: 'glyphicon glyphicon-refresh'
    },
    fields: {
        firstName: {
            validators: {
                stringLength: {
                    min: 2,
                    message: 'Please enter your first name'
                },
                notEmpty: {
                    message: 'Please enter your first name'
                }
            }
        },
        lastName: {
            validators: {
                stringLength: {
                    min: 2,
                    message: 'Please enter your last name'
                },
                notEmpty: {
                    message: 'Please enter your last name'
                }
            }
        },
        contactNumber: {
            validators: {
                numeric: {
                    message: 'The contact number must be a number'
                },
                notEmpty: {
                    message: 'Please enter your contact number'
                }
            }
        },
        email: {
            validators: {
                notEmpty: {
                    message: 'Please enter your email address'
                },
                emailAddress: {
                    message: 'Please enter a valid email address'
                }
            }
        }, 
        termsAndConditions: {
            validators: {
                notEmpty: {
                    message: 'Please read the terms and conditions and check the box before you can proceed.'
                }
            }
        },
        siaEmployee: {
            validators: {
                notEmpty: {
                    message: 'Please indicate whether you are an employee of Singapore Airlines (SIA).'
                }
            }
        },
    }
});