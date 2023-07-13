body {
    margin: 0;
    padding: 0;
  }
  
  .parallax-container {
    height: 100vh;
    overflow-x: hidden;
    overflow-y: auto;
    perspective: 1px;
    perspective-origin: 0 0;
  }
  
  .parallax-layer {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }
  
  .parallax-background {
    background-image: url('https://via.placeholder.com/1200x800'); /* Ganti URL gambar dengan URL gambar yang diinginkan */
    background-size: cover;
    background-position: center;
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    transform: translateZ(-1px) scale(2);
  }
  
  .parallax-content {
    text-align: center;
    padding: 50px;
    color: #fff;
    font-size: 24px;
    background-color: rgba(0, 0, 0, 0.5);
  }
  