
function updateProfileInfo(profileData) {
const name = document.getElementById('profile.name')
name.innerText = profileData.name
const job = document.getElementById('profile.job')
job.innerText = profileData.job
const location = document.getElementById('profile.location')
location.innerText = profileData.location
const phone = document.getElementById('profile.phone')
phone.innerText = profileData.phone
const email = document.getElementById('profile.email')
email.innerText = profileData.email
}

function updateSoftskills(profileData) {
const pessoal = document.getElementById('profile.pessoal')
pessoal.innerHTML = profileData.skills.softSkills.map(skills => `<li>${skills}</li>`).join('')
}
function updateLanguages(profileData) {
const languages = document.getElementById('profile.languages')
languages.innerHTML = profileData.languages.map(languages => `<li> ${languages} </li>`).join('')
}
function updatePortfolio(profileData) {
const portfolio = document.getElementById('profile.portfolio')
portfolio.innerHTML = profileData.portfolio.map(portfolio => {
return `
                    <li> <span ${portfolio.titulo ?  'class="titulo"' : ''}>${portfolio.name}</span>
                        <a href="${portfolio.url}">${portfolio.url}</a>
                    </li>`
}).join('')
}








(async () => {
const profileData = await fetchProfileData()
updateProfileInfo(profileData)
updateSoftskills(profileData)
updateLanguages(profileData)
updatePortfolio(profileData)
})()