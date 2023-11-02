<template>
    <header class="sticky-top">
      <div class="header bg-white">
        <div class="container">
          <div class="row align-items-center">
            <div class="col-md-2">
              <img
                src="@/assets/img/logo.jpg"
                alt="logo"
                class="instituto img-fluid"
                width="80px"
              />
            </div>
            <div class="col-md-10">
              <h1 class="display-6">
                PLATAFORMA VIRTUAL DE COMERCIO ELECTRÓNICO DESARROLLADO CON FLUTTER
              </h1>
            </div>
          </div>
        </div>
      </div>
  
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container">
          <ul class="navbar-nav">
            <li class="nav-item">
              <router-link to="/" class="nav-link">CARÁTULA</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/capitulo1" class="nav-link">CAPÍTULO 1</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/capitulo2" class="nav-link">CAPÍTULO 2</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/capitulo3" class="nav-link">CAPÍTULO 3</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/capitulo4" class="nav-link">CAPÍTULO 4</router-link>
            </li>

          </ul>
        </div>
      </nav>
    </header>
  </template>
  
  