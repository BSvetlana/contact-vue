const RULES = {
    REQUIRED: 'required',
    NUMBER: 'number',
    EMAIL: 'email'
}
const MESSAGES_CLASSNAME = "validator-messages";

const removeMessageElement = (element) => {

    let oldMessageElement = element.querySelector(`#${MESSAGES_CLASSNAME}`)
    if (oldMessageElement) {
        oldMessageElement.remove()
    }
}
const MyDirectives = {
    install: function(Vue) {
        Vue.directive('focusOn', {
            inserted: function (element, binding) {
                element.focus()
                //console.log('xxx',element, binding)
            }
        })
        
        Vue.mixin({
            mounted: function() {
                console.log(this.$el)
            }
        })

        Vue.directive('validate', {
            inserted: function(element,binding) {
                 let validationRules = binding.value

                element.addEventListener('submit', (event) => {
                    event.preventDefault();
                    console.log('event', event, validationRules)

                        Object.keys(validationRules).forEach(key => {
                        
                            let input = element.querySelector(`#${key}`)
                            if (!input) {
                                throw new Error(`Element validation rule ${key} not found`)
                            }


                        if (validationRules[key].indexOf(RULES.REQUIRED) > -1 && !input.value.length){
                            let messageElement = document.createElement('div')

                            messageElement.id = MESSAGES_CLASSNAME;
                            removeMessageElement(element)

                            messageElement.innerHTML = `This field ${key} is required`;
                            element.appendChild(messageElement)
                        } else {
                            removeMessageElement(element)
                        }
                    })
                    
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