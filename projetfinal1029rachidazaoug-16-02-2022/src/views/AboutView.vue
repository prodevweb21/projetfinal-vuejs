
<template>
  <div class='container'>
  
    <h2>Projet final Vuejs 2022</h2>


<h3>Guide de l'utilisateur</h3>

<h5>
l'application permet de construire une application par un assemblage de plusieurs composants.
Ce composant permet de créer de nouvelles balises HTML avec un comportement spécifique.
Cette façon de faire permet de facilement réutiliser un composant.
</h5>

<ul>

<b>Voici la liste des fonctionnalités:</b>

<li>Composants</li>
Les composants Vue étendent les éléments HTML de base pour encapsuler du code réutilisable. Il s'agit donc d'éléments personnalisés auxquels le compilateur de Vue attache un comportement.
<li>Directives</li>
Les directives sont des instructions pour VueJS de faire les choses d’une certaine manière.Ces directives sont les éléments de syntaxe propres à Vue utilisables dans les templates des composants.
*v-bind : Liaison de propriétés:
  Permet de lier /bind/  à une variable la valeur d'une propriété d'un élément HTML ou d'un composant. Comme c'est la directive la plus couramment utilisée, on utilise généralement toujours la syntaxe raccourcie :propriété="valeur".
*-v-model : Formulaires et inputs:
  Permet de lier la valeur d'un champ de formulaire à une donnée du composant. C'est une liaison à double-sens, c'est-à-dire que la variable se met à jour quand le contenu du champ change -typiquement par l'utilisateur- et réciproquement.
*v-if : Conditions:
  Permet d'insérer ou non un élément selon une condition.Les directives v-else-if et v-else fonctionnent de la même façon que leur équivalent JavaScript et dépendent de la condition v-if de l'élément qui les précède directement.
*v-for : Boucles:
  Permet de générer des listes d'éléments en répétant un template par itération sur une valeur itérable, typiquement un Array, la liste des propriétés d'un objet, ou encore un nombre fixe d'itérations.
*v-on : Événements:
  Permet de définir une action à effectuer lorsqu'un évènement survient. Il peut s'agir d'un événement du DOM -click, mouseover, focus...-ou d'un événement personnalisé émis par un composant enfant.
<li>Templates</li>
Vue.js utilise une syntaxe de template basée sur le HTML qui vous permet de lier déclarativement le DOM rendu aux données de l’instance sous-jacente de Vue. Tous les templates de Vue.js sont du HTML valide qui peut être interprété par les navigateurs et les interpréteurs HTML conformes aux spécifications.
<li>Réactivité</li>
La réactivité est le mécanisme qui permet au framework de détecter lorsque des données utilisées sur la page sont modifiées -mutées-, et de mettre à jour la page de façon optimale
Vue fournit une réactivité automatique, c'est-à-dire qu'il n'est pas nécessaire au développeur de déclencher manuellement la mise à jour de la vue après avoir muté des données. Cette réactivité est basée sur 2 fonctionnalités de JavaScript : les getters/setters pour Vue 2 et les Proxies pour Vue 3
La principale limitation des getters/setters est qu'il faut connaître au préalable le nom des variables pour leur assigner un getter/setter. C'est la raison pour laquelle il est impératif de déclarer en data ou en props toutes les variables utilisées par un composant si on veut qu'elles soient réactives.
<li>Transitions</li>
Vue propose deux composants intégrés qui peuvent vous aider à travailler avec des transitions et des animations en réponse à un changement d’état :
-Transition- pour appliquer des animations lorsqu’un élément ou un composant entre et sort du DOM. Ceci est couvert sur cette page.
-TransitionGroup- pour appliquer des animations lorsqu’un élément ou un composant est inséré, supprimé ou déplacé dans une liste
<li>Routage</li>
es applications Vue sont la plupart du temps des Single Page Applications (SPA), c'est-à-dire que le serveur dessert toujours une seule et même page, et la navigation entre les pages est gérée côté client en JavaScript. Cette approche permet des transitions plus fluides entre pages, et de réduire le nombre d'appels nécessaires au serveur pour naviguer entre les pages. Cela s'avère essentiel pour les Progressive Web Apps ou les applications web souhaitant disposer de fonctionnalités offline.
Le routage d'une SPA est donc géré côté client, et l'équipe de Vue fournit une bibliothèque à cet effet: vue-router. Ce routeur permet d'associer des routes (URL) à des composants Vue,
</ul>


<h3>Avantage de vueJS</h3>
<li>*L’écosystème Vue</li>
  L’écosystème Vue.js se compose d’une bibliothèque de base, de frameworks et d’autres outils qui permettent un développement front-end facile et rapide.
<li>*Vue CLI</li>
  Vue CLI est la base d’outils standard pour le framework Vue js. Elle fournit un ensemble d’outils spécialement conçus pour faciliter le travail avec Vue. Elle s’occupe de l’intégration des outils avec des valeurs par défaut afin qu’on puisse se concentrer sur l’application Web.
<li>*Vuex</li>
  VueX est une bibliothèque de gestion d’état pour Vue.js. Elle s’intègre aux applications Vue en créant une interface propre et isolée pour lier les données stubées aux données de l’API Web.
<li>*Flexibilité</li>
  L’écriture d’une application à l’aide de Vue.JS est rapide dû au fait qu’il est possible de l’exécuter via son navigateur. Cela facilite également le processus de tes
<li>*Architecture de communication bidirectionnelle</li>
Vue.JS prend en charge une architecture MVVM -Model-View-View-Model- et c’est pourquoi il facilite également la communication bidirectionnelle. Cette architecture MVVM facilite la manipulation des blocs HTML. 
<br>


<h5>
J'ai utilisé vueJS car son architecture est très simple. Elle permet d'avoir plusieurs composants organisés mais représentés dans une page unique et lisibilité.
</h5> 
<br>


<b>Objet vueJS</b>
<br>

Dans L'application j'ai utilise la nouvelle version de Vuejs Version 3.
Cette version utilise spécifiquement Typescript.
La synthaxe des composants est très différente.
Un des principaux changements, la mise en application d'une nouvelle API qui permettra de façon fonctionnelle d’écrire le composant

  

  </div>

</template>

<style scoped>


  h3, h4, h2 {

    font-size:30px;
    text-align:center;
    padding:5px;
    text-decoration:underline;
  }

  li{
    font-size:20px
  
    }

</style>
