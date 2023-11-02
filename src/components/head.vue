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
              Detalles de Aplicacion
              </h1>
            </div>
          </div>
        </div>
      </div>
  
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container">
          <ul class="navbar-nav">

            <li class="nav-item">
              <router-link to="/aplicacion" class="nav-link">APLICACION</router-link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  </template>
  
  