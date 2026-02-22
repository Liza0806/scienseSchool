import { useLocation } from "react-router";
import PageMeta from "../components/PageMeta";
import { FC, useEffect } from "react";


const About: FC = () => {

  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      // Если нет hash, вернуться к сохранённой позиции
      const scrollPosition = localStorage.getItem("scrollPosition");
      if (scrollPosition) {
        window.scrollTo(0, parseInt(scrollPosition, 10));
        localStorage.removeItem("scrollPosition");
      }
    }
  }, [location]);

  return (
    <div id="start">
      <PageMeta
        title="Онлайн школа естественных наук"
        description="Репетитор, КРОК, НМТ"
      />
      <h1 >About</h1>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt autem
      debitis animi, minima doloremque, dolorum, omnis ex laborum aperiam
      asperiores itaque iusto iure architecto nulla quis. Eaque, nisi commodi
      molestiae corrupti beatae explicabo asperiores fugit ipsam dignissimos
      facere eius velit est ratione rerum possimus unde saepe modi ad nulla!
      Error eveniet quia perferendis dicta commodi saepe iste laudantium rem
      corporis, pariatur dolore sint repellendus similique! Quasi optio sit
      pariatur sunt error et. Nihil, exercitationem distinctio dolor tenetur
      ducimus illum quidem ut perspiciatis. Culpa esse illum soluta inventore
      ipsa officia ullam repudiandae, consequatur dicta fuga quasi sit eius
      molestiae iste, error est recusandae excepturi saepe sed eos blanditiis
      consequuntur doloremque? Corrupti, nulla id dolorum rem laudantium
      delectus quas natus earum voluptatem quia at nobis commodi deleniti
      repudiandae quasi facere impedit perferendis sapiente ipsam odio qui, sint
      ipsum illum porro? Ea numquam praesentium, natus sequi laboriosam
      blanditiis quidem beatae tempora expedita cum eaque placeat ab accusantium
      unde sed molestiae eius harum? Rem ad quibusdam quos sed voluptatem ea
      mollitia amet voluptas quam asperiores id nostrum, consequuntur beatae
      minima fugit vitae voluptate accusamus labore fuga enim aliquid cumque ut
      cum! Ad harum illo, sit rem iusto voluptatibus modi delectus earum debitis
      natus consectetur deleniti blanditiis alias pariatur nisi facilis, eveniet
      dolores? Officiis eaque dolorum cumque libero, repellendus quis eius
      cupiditate reiciendis doloribus impedit nihil autem deleniti maxime
      dolorem fugit unde sequi quos! Iure dicta distinctio ex voluptatibus
      aspernatur possimus soluta veritatis totam hic culpa magnam doloribus
      inventore necessitatibus beatae tempore atque at suscipit nisi labore
      repellat odit esse illo, officia nesciunt! Nesciunt, perspiciatis culpa!
      Quaerat quos repellendus quod. Asperiores tenetur mollitia quia voluptatum
      voluptatibus, dolore beatae esse inventore, veniam tempore accusantium
      minima repellendus autem eos exercitationem error quae magnam similique
      animi reiciendis quas earum quasi molestias optio. Sequi, perferendis
      nesciunt rem ullam veniam debitis exercitationem error qui aliquid
      assumenda accusamus, quidem, delectus natus quia maiores alias quibusdam
      architecto similique aut atque blanditiis possimus minima voluptate? Enim
      tenetur magnam iusto aliquid dolor iste ullam voluptatum, rem
      exercitationem accusantium ducimus sed! Quas, ex dolores! A iure earum
      modi, tempora voluptas saepe, quod numquam soluta provident, omnis itaque
      ipsam beatae ut. Corrupti molestiae nisi optio similique aliquam tempore
      nihil beatae assumenda numquam accusamus sit odit quam eaque repudiandae
      rerum odio quia quo provident deleniti suscipit cum doloremque delectus,
      quis error! Officia vero, corrupti cumque voluptates porro fugiat placeat
      nisi, earum fugit unde minus similique mollitia impedit labore sed illum
      tempora eligendi natus inventore id dolores omnis minima. Iste
      perspiciatis quidem totam non optio ducimus officiis id veniam ut
      reprehenderit. Nihil temporibus debitis ipsa magnam rerum laboriosam
      officiis, vel optio voluptatum, dolorem facilis, sint similique nam error
      autem illum in doloremque odit eaque eos tempora harum. Ipsum perspiciatis
      dolores ipsam, exercitationem fugiat sunt, sit debitis quo dolore animi
      hic nostrum minima nisi! Amet eum, consectetur cupiditate reprehenderit
      vel a maiores, nesciunt itaque quas debitis excepturi beatae aut dolore
      fuga quasi ex, possimus laudantium minima sint repellendus ipsum eaque
      nemo reiciendis temporibus. Fugit deserunt cupiditate veniam odit nisi?
      <section id="directions">
        <h2>Направления работы</h2>
        <p>Информация о направлениях...</p>
      </section>
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati
      consectetur dolores sunt illum magni qui voluptatibus, non fugit unde
      reiciendis pariatur? Deserunt illum voluptas atque molestiae? Rem quos
      cupiditate vero non sapiente officia ullam laudantium corporis numquam
      dicta veritatis similique saepe, mollitia nisi tempore iusto ipsa
      recusandae officiis debitis. Ab alias autem unde tempora in libero neque
      amet explicabo ut quia quam expedita deleniti delectus doloremque, dolorum
      porro aperiam magni ratione perferendis vel. Magnam, animi labore
      consequatur saepe consectetur vero dicta. Reiciendis temporibus hic iste
      repudiandae tempora! Vitae magnam sunt deserunt voluptatum ullam alias
      culpa. Ab optio laboriosam soluta aspernatur quasi at eum molestiae
      numquam aliquid similique recusandae sunt eius, ducimus, unde enim totam
      tempore? Fugiat vel deleniti adipisci similique vero alias, nisi
      reiciendis modi commodi ipsam tenetur enim repudiandae, rem tempore unde
      dolorum ipsum nostrum culpa doloremque incidunt veniam. Vel reiciendis
      laboriosam autem. Eum rerum incidunt quas nam ullam nobis nesciunt
      doloribus praesentium iure, harum repellendus culpa facere ad provident
      animi minima voluptatum modi porro aut ab repellat doloremque quis
      deleniti fugiat! Rerum odit facilis consectetur. Reprehenderit numquam
      officia id qui ipsum vitae maiores earum vero voluptatum doloribus, quia
      commodi veritatis error assumenda laudantium eum iste optio eos quas
      saepe. Velit magnam, asperiores cum soluta, quos aspernatur ipsa corrupti
      officia a, nesciunt porro. Doloremque necessitatibus explicabo ratione
      veritatis labore similique, quo minima consequatur nihil, ipsam, nesciunt
      aperiam! Consequatur cum accusantium, consequuntur animi ullam sequi,
      inventore tempora quisquam ratione illo hic reprehenderit dicta unde nihil
      odit! Optio, incidunt earum architecto deleniti eius nam commodi ducimus
      recusandae perspiciatis esse reiciendis necessitatibus illum tenetur sequi
      voluptatum quam qui aliquid quas laudantium et pariatur? Veritatis unde
      voluptas nostrum cupiditate ex debitis necessitatibus magni vitae maxime
      deleniti nulla fuga, illum laborum quos suscipit quisquam amet error iste
      assumenda ducimus mollitia veniam dicta! Illo, eum alias? Sit voluptatem
      quam ipsam consequuntur doloremque excepturi cum molestias soluta eligendi
      deserunt! Culpa soluta laboriosam, dolore maiores ea assumenda dolor
      mollitia deleniti architecto commodi, saepe adipisci ex ipsa dolorum
      laudantium doloremque quos rem corporis placeat enim eligendi provident!
      Dolorum cupiditate nihil placeat necessitatibus aperiam ipsum et. Quidem
      ea repellendus blanditiis nihil porro pariatur doloribus facilis
      exercitationem error velit. Voluptate dolor soluta earum amet, recusandae
      molestias autem voluptatibus, libero tempora error cumque qui vero
      incidunt, assumenda optio? Deserunt, cumque aliquid, ipsam sapiente
      ratione beatae sequi soluta nobis illum mollitia incidunt libero. At,
      esse. Blanditiis deleniti sapiente reiciendis error itaque, obcaecati
      temporibus assumenda, modi accusantium officia corporis! Adipisci
      accusantium modi dicta veritatis officia, quia dignissimos exercitationem
      atque, amet ex nemo quis officiis placeat vitae reiciendis? Esse non
      nostrum maxime soluta, tenetur reiciendis laborum iusto nulla quidem,
      harum ullam! Ullam velit, explicabo, rem, iure doloremque sint dignissimos
      minus assumenda quam vero dolorem quasi odit fuga. Labore facere fuga
      distinctio nostrum in commodi eveniet aperiam mollitia dolorum perferendis
      autem laudantium a minus veniam blanditiis exercitationem, dolores nulla
      quidem. Nostrum tenetur et quos molestias consequatur labore libero
      tempora quisquam sint deleniti ipsum saepe aspernatur cumque harum
      inventore sit iusto repudiandae nulla, aperiam earum minima.
    </div>
  );
};

export default About;
