(() => {

        class Accordion{
          //初期化（一番最初に実行される）
          constructor(obj){//()にobjと入れると下のfuckingAccordionが呼ばれる
            console.log("obj",obj.hookName);
            const $elm = document.querySelector(obj.hookName);
            const $trigger = $elm.getElementsByTagName(obj.tagName);
    
            const triggerLen = $trigger.length;
            let index = 0;
            while (index < triggerLen) {
              $trigger[index].addEventListener("click", (e) => clickHandler(e));
              index++;
            }
          }

          //クリックしたら実行される処理
          clickHandler = (e) => {
            e.preventDefault();

            const $target = e.currentTarget;
            const $content = $target.nextElementSibling;

            if($content.style.display === "block"){
              $content.style.display = "none";
            }else{
              $content.style.display = "block";
            }
          }
        }  

        const fuckingAccordion = new Accordion({
            hookName: "#js-faq", //"#js-accordion"を書き換える
            tagName: "p"//"a"を書き換える
        });

})();