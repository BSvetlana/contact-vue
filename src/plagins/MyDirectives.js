const MyDirectives = {
    install: function(Vue) {
        Vue.directive('focusOn', {
            inserted: function (element, binding) {
                element.focus()
                //console.log('xxx',element, binding)
            }
        })
    }
}

export default MyDirectives