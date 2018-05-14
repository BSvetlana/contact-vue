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
                const RULES = {
                    REQUIRED: 'required',
                    NUMBER: 'number',
                    EMAIL: 'email'
                }

                let validationRules = binding.value

                element.addEventListener('submit', (event) => {
                    event.preventDefault();
                    console.log('event', event, validationRules)

                        Object.keys(validationRules).forEach(key => {
                        if (validationRules[key].indexOf(RULES.REQUIRED) > -1){
                            let messageElement = document.createElement('div')
                            messageElement.innerHTML = `This field ${key} is required`;
                            element.appendChild(messageElement)
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