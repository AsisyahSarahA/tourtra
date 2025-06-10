    // pemanggilan navbar, about, transpost, review, tiket

        // nabvar
        fetch('/page/navbar.html')
          .then(res => res.text())
          .then(navbar => {
            document.getElementById('navbar').innerHTML = navbar;
          });

        // about
        fetch('/about.html')
          .then(res => res.text())
          .then(about => {
            document.getElementById('about').innerHTML = about;
          });

        // transpost
        fetch('/transpost.html')
            .then(res => res.text())
            .then(transpost => {
              document.getElementById('transpost').innerHTML = transpost;
            });   

        // riview
        fetch('/review.html')
            .then(res => res.text())
            .then(review => {
              document.getElementById('review').innerHTML = review;
            });

        // tiket
        fetch('/tiket.html')
            .then(res => res.text())
            .then(tiket => {
              document.getElementById('tiket').innerHTML = tiket;
            });   
        // home index
        fetch('index.html')
            .then(res => res.text())
            .then(index => {
              document.getElementById('index').innerHTML = index;
            });   
        // kontak
        fetch('/kontak.html')
            .then(res => res.text())
            .then(kontak => {
              document.getElementById('kontak').innerHTML = kontak;
            });   

        // count website 
        // Ambil data dari localStorage
        let reloadCount = localStorage.getItem('reloadCount');

        // Jika belum pernah disimpan, mulai dari 0
        if (reloadCount === null) {
          reloadCount = 0;
        } else {
          reloadCount = parseInt(reloadCount);
        }

        // Tambahkan 1 setiap reload
        reloadCount++;

        // Simpan kembali ke localStorage
        localStorage.setItem('reloadCount', reloadCount);

        // Tampilkan di halaman
        document.getElementById('reload-count').textContent = reloadCount;


        // riview js
        const cards = document.querySelectorAll('.card');
        cards.forEach(card => {
            card.addEventListener('mouseenter',() =>{
            card.style.transform = 'scale(1.05)';
            card.style.transition = 'transform 0.3s ease-in-out';
            });
            card.addEventListener('mouseleave',() =>{
            card.style.transform = 'scale(1)';
            card.style.transition = 'transform 0.3s ease-in-out';
            });
        });

