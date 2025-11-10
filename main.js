    const dugmePovecaj = document.createElement('button');
    const dugmeSmanji = document.createElement('button');
    const dugmeSvetlo = document.createElement('button');
    const dugmeTamno = document.createElement('button');

    dugmePovecaj.setAttribute('aria-label','povecaj font');
    dugmeSmanji.setAttribute('aria-label','smanji font');
    dugmeSvetlo.setAttribute('aria-label','svetla tema');
    dugmeTamno.setAttribute('aria-label','tamna tema');

    dugmePovecaj.innerText='A';
    dugmeSmanji.innerText='a';
    dugmeSvetlo.innerText='L';
    dugmeTamno.innerText='D';

    const kutija = document.getElementById('kutijaPristupljivost');
    const unutrasnji = kutija.querySelector('div');
    unutrasnji.appendChild(dugmePovecaj);
    unutrasnji.appendChild(dugmeSmanji);
    unutrasnji.appendChild(dugmeSvetlo);
    unutrasnji.appendChild(dugmeTamno);

    // stilovi za dugmice
    [dugmePovecaj,dugmeSmanji,dugmeSvetlo,dugmeTamno].forEach(b=>{
      b.style.margin='2px';
      b.style.padding='4px 6px';
      b.style.border='none';
      b.style.background='transparent';
      b.style.cursor='pointer';
    });

    // funkcionalnosti promena fonta
    function citajFont(){
      return parseFloat(getComputedStyle(document.documentElement).fontSize);
    }
    dugmePovecaj.addEventListener('click',()=>{
      let f = citajFont();
      if(f<22) document.documentElement.style.fontSize=(f+1)+'px';
    });
    dugmeSmanji.addEventListener('click',()=>{
      let f = citajFont();
      if(f>12) document.documentElement.style.fontSize=(f-1)+'px';
    });

    // promena teme
    dugmeSvetlo.addEventListener('click',()=>{ document.documentElement.removeAttribute('tema'); });
    dugmeTamno.addEventListener('click',()=>{ document.documentElement.setAttribute('tema','tamna'); });

