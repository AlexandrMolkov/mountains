import { Fancybox, Panzoom } from "@fancyapps/ui";

Fancybox.bind("[data-fancybox]", {
    hideScrollbar: false,
});

if(document.getElementById("myPanzoom")) {
    const zoom = new Panzoom(document.getElementById("myPanzoom"), { click: "iterateZoom", dblClick: "toggleCover", panMode: "mousemove", panOnlyZoomed: false });

        window.addEventListener('resize', () =>  {
            document.querySelector('.panz').style.cssText = `
                width: 100%;
                height: auto;
            `
            
        });
}

/* document.getElementById("myPanzoom").addEventListener("click", () => {
    zoom.flipX();
  }); */