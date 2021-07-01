document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.how__step').forEach(function(howStep){
        howStep.addEventListener('click', function(event) {
             const path = event.currentTarget.dataset.path
             document.querySelectorAll('.how__tab').forEach(function(howDescription) {
                howDescription.classList.remove('tab-content-active')
             })
             document.querySelector(`[data-target="${path}"]`).classList.add('tab-content-active')
        })
    })
})

document.addEventListener('DOMContentLoaded', function(){
    document.querySelectorAll('.how__step').forEach(function(howStep){
        howStep.addEventListener('click', function(event) {
            const path = event.currentTarget.dataset.path
            document.querySelectorAll('.how__step').forEach(function(howStepOrange){
                howStepOrange.classList.remove('how__step_orange')
            })
            document.querySelector(`[data-path="${path}"]`).classList.add('how__step_orange')
        })
    })
})

document.addEventListener('keydown', (event) => {
  if (event.code === 'Space')
    event.preventDefault()
})

document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('.how__step').forEach(function(howStep){
      howStep.addEventListener('keydown', function(event) {
           const path = event.currentTarget.dataset.path
           document.querySelectorAll('.how__tab').forEach(function(howDescription) {
              howDescription.classList.remove('tab-content-active')
           })
           document.querySelector(`[data-target="${path}"]`).classList.add('tab-content-active')
      })
  })
})

document.addEventListener('DOMContentLoaded', function(){
  document.querySelectorAll('.how__step').forEach(function(howStep){
      howStep.addEventListener('keydown', function(event) {
          const path = event.currentTarget.dataset.path
          document.querySelectorAll('.how__step').forEach(function(howStepOrange){
              howStepOrange.classList.remove('how__step_orange')
          })
          document.querySelector(`[data-path="${path}"]`).classList.add('how__step_orange')
      })
  })
})
