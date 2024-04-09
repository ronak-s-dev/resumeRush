function download(){
    let width = window.innerWidth;
    if (width <= 576){              //Works for screen sizes less than 576
        function autoDownload(){
            window.devicePixelRatio = 4;
            html2canvas(document.querySelector(".template")).then((canvas) => {
            let base64image = canvas.toDataURL('image/png');
            //console.log(base64image);
            let pdf = new jsPDF('p', 'px', [595, 842]);
            pdf.addImage(base64image, 'PNG', 0, 0, 595, 842);
            pdf.save('resume.pdf');
            });
        };
        autoDownload();
    }
    else{
        $("#btnPrint").click(function(){
            window.devicePixelRatio = 4;
            html2canvas(document.querySelector(".template")).then((canvas) => {
                let base64image = canvas.toDataURL('image/png');
                //console.log(base64image);
                let pdf = new jsPDF('p', 'px', [595, 842]);
                pdf.addImage(base64image, 'PNG', 0, 0, 595, 842);
                pdf.save('resume.pdf');
            });
        });
    }
}
download();

