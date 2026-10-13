const translations={
es:{skip:"Saltar al contenido",navProjects:"Proyectos",navSkills:"Habilidades",navAbout:"Sobre mí",heroEyebrow:"Ingeniería · Software · Investigación",heroTitle:"Ideas complejas.<br>Software que funciona.",heroBody:"Soy Santiago, estudiante de Ingeniería Civil en Computación e Informática en la Universidad de los Andes, Chile. Me interesa convertir problemas reales en sistemas claros, medibles y útiles.",seeProjects:"Explorar proyectos",seeGithub:"Ver GitHub",location:"Santiago, Chile · Universidad de los Andes",indexWork:"Trabajo seleccionado",projectsTitle:"Proyectos destacados<span class='accent'>.</span>",projectsIntro:"Dos formas de abordar problemas: construir productos para personas y validar soluciones mediante experimentos.",soloqType:"Aplicación web · Proyecto personal",soloqDesc:"Plataforma de clasificación para una comunidad de League of Legends: perfiles, historial de rango, estadísticas y herramientas de administración. Desarrollada con arquitectura web y persistencia en PostgreSQL.",ctType:"Computación científica · Investigación universitaria",ctTitle:"Reconstrucción tomográfica",ctDesc:"Experimentos reproducibles de tomografía computarizada: transformada de Radon, reconstrucción por retroproyección filtrada, efectos del ruido y comparación numérica entre DFT y FFT.",viewRepository:"Ver repositorio",viewRepository2:"Ver repositorio",indexStack:"Herramientas",skillsTitle:"Lo que utilizo<span class='accent'>.</span>",skillsIntro:"Tecnologías utilizadas en mis proyectos y áreas que sigo profundizando.",webTitle:"Desarrollo web",dataTitle:"Datos y herramientas",scienceTitle:"Computación científica",indexPerson:"La persona detrás del código",aboutTitle:"Curiosidad dentro y fuera de la pantalla<span class='accent'>.</span>",aboutBody:"Comencé mis estudios en 2022. Disfruto tanto desarrollar aplicaciones como entender la teoría que las sustenta. Fuera de la universidad, me gustan los videojuegos, el entrenamiento físico, el anime y el mundo de las cartas coleccionables.",aboutCallout:"Mi objetivo: seguir aprendiendo mientras construyo cosas que otras personas realmente puedan utilizar.",connect:"Conversemos en GitHub",footer:"Hecho con HTML, CSS y JavaScript · GitHub Pages",backTop:"Volver arriba ↑"},
en:{skip:"Skip to content",navProjects:"Projects",navSkills:"Skills",navAbout:"About",heroEyebrow:"Engineering · Software · Research",heroTitle:"Complex ideas.<br>Software that works.",heroBody:"I'm Santiago, a Computer Science and Engineering student at Universidad de los Andes in Chile. I enjoy turning real-world problems into clear, measurable, useful systems.",seeProjects:"Explore projects",seeGithub:"View GitHub",location:"Santiago, Chile · Universidad de los Andes",indexWork:"Selected work",projectsTitle:"Featured projects<span class='accent'>.</span>",projectsIntro:"Two approaches to solving problems: build products for people and validate ideas through experiments.",soloqType:"Web application · Personal project",soloqDesc:"A League of Legends community leaderboard with player profiles, ranked history, statistics and administration tools. Built with a modern web architecture and PostgreSQL persistence.",ctType:"Scientific computing · University research",ctTitle:"CT reconstruction",ctDesc:"Reproducible computed tomography experiments: Radon transform, filtered backprojection, noise effects, and numerical comparison of DFT and FFT.",viewRepository:"View repository",viewRepository2:"View repository",indexStack:"Tools",skillsTitle:"What I work with<span class='accent'>.</span>",skillsIntro:"Technologies used in my projects and areas I'm continuing to explore.",webTitle:"Web development",dataTitle:"Data and tooling",scienceTitle:"Scientific computing",indexPerson:"Behind the code",aboutTitle:"Curious on and off screen<span class='accent'>.</span>",aboutBody:"I started university in 2022. I enjoy building applications as much as understanding the theory behind them. Outside university, I'm interested in gaming, fitness, anime and trading cards.",aboutCallout:"My goal: keep learning while building things people can actually use.",connect:"Connect on GitHub",footer:"Built with HTML, CSS and JavaScript · GitHub Pages",backTop:"Back to top ↑"}
};
const htmlKeys=new Set(["heroTitle","projectsTitle","skillsTitle","aboutTitle"]);
const root=document.documentElement;
let language="es";
function updateLanguage(next){
 language=next;root.lang=language;
 document.querySelectorAll("[data-i18n]").forEach(element=>{
  const key=element.dataset.i18n,value=translations[language][key];
  if(!value)return;
  if(htmlKeys.has(key))element.innerHTML=value;else element.textContent=value;
 });
 const toggle=document.getElementById("language-toggle");
 toggle.textContent=language==="es"?"EN":"ES";
 toggle.setAttribute("aria-label",language==="es"?"Switch to English":"Cambiar a español");
 toggle.title=toggle.getAttribute("aria-label");
 document.title=language==="es"?"Santiago Robeson · Software e Investigación":"Santiago Robeson · Software & Research";
 updateThemeButton();
}
function updateThemeButton(){
 const dark=root.dataset.theme==="dark",button=document.getElementById("theme-toggle");
 document.getElementById("theme-icon").textContent=dark?"☀":"☾";
 const label=dark?(language==="es"?"Activar tema claro":"Switch to light theme"):(language==="es"?"Activar tema oscuro":"Switch to dark theme");
 button.setAttribute("aria-label",label);button.title=label;
 document.querySelector('meta[name="theme-color"]').content=dark?"#0b1020":"#f6f8fc";
}
document.addEventListener("DOMContentLoaded",()=>{
 document.getElementById("year").textContent=new Date().getFullYear();
 document.getElementById("language-toggle").addEventListener("click",()=>updateLanguage(language==="es"?"en":"es"));
 document.getElementById("theme-toggle").addEventListener("click",()=>{
  root.dataset.theme=root.dataset.theme==="dark"?"light":"dark";
  updateThemeButton();
 });
 updateLanguage("es");
});
