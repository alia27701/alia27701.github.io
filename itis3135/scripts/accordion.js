var show = document.getElementsByClassName("accordion");
        for (let i = 0; i < show.length; i++) {
            show[i].addEventListener("click", function() {
                this.classList.toggle("active");
                var seeking = this.nextElementSibling;
                if (seeking.style.display === "block") {
                    seeking.style.display = "none";
                } else {
                    seeking.style.display = "block";
                }
            });
        }