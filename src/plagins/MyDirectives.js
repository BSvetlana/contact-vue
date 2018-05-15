import validator from 'validator'

const RULES = {
    REQUIRED: 'required',
    NUMBER: 'number',
    EMAIL: 'email'
}
const MESSAGES_CLASSNAME = "validator-messages";

const removeMessageElements = (element) => {

    let oldMessageElement = element.querySelectorAll(`#${MESSAGES_CLASSNAME}`)
        oldMessageElement.forEach((oldMessageElement) => {
        oldMessageElement.remove()
        })
       
}

const showMessagesError = (element,message) => {
    let messageElement = document.createElement('div')
    messageElement.id = MESSAGES_CLASSNAME;
    messageElement.style.color = 'limegreen'
    messageElement.innerHTML = message;
    element.appendChild(messageElement)
}


const MyDirectives = {
    install: function(Vue) {
        Vue.directive('focusOn', {
            inserted: function (element) {
                element.focus()
                //console.log('xxx',element, binding)
            }
        })
        
        Vue.mixin({
            mounted: function() {
                //console.log(this.$el)
            }
        })

        Vue.directive('validate', {
            inserted: function(element,binding) {
                 let validationConfig = binding.value
                 let validationRules = validationConfig.validationRules

                element.addEventListener('submit', (event) => {
                    let errorCounter = 0
                    event.preventDefault();
                    //console.log('event', event, validationRules)

                        Object.keys(validationRules).forEach(key => {
                        
                            let input = element.querySelector(`#${key}`);

                            if (!input) {
                                throw new Error(`Element validation rule ${key} not found`)
                            }
                            console.log(input,'jkjkj')
                            removeMessageElements(element)
                            
                            if (validationRules[key].indexOf(RULES.EMAIL) > -1 && !validator.isEmail(input.value)){
                                errorCounter++ 
                                showMessagesError(element, `This field must be email`)
                            }

                        if (validationRules[key].indexOf(RULES.REQUIRED) > -1 && !input.value.length){
                            errorCounter ++                            
                            showMessagesError(element, `This field ${key} is required`)  
                        } 
                    })
                    if( errorCounter == 0){
                        validationConfig.submitCallback()
                    }
                    
                })

                //let isRequired = binding.arg === RULES.REQUIRED


                //element.addEventListener('input', (event) => {
                    //let value = event.target.value
                   //if(isRequired && !value.length) {
                      //console.log('Field is required', event.target.name)
                   //}
                //})
                
            }
        })
    }
}

export default MyDirectives