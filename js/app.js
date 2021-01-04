$.ajax("https://spreadsheets.google.com/feeds/list/1DjU9tt8aBYEmFNr527461VqIawSoEpciOwxEltgU7ic/1/public/full?alt=json").then((data) => {


    const projects = data.feed.entry.map((item) => {
        return {
            name: item.gsx$name.$t,
            git: item.gsx$git.$t,
            live: item.gsx$live.$t,
            img: item.gsx$img.$t
        }
    })


    const final = projects.map((project) => {
        return `
        <my-card name=${project.name} git=${project.git} live=${project.live} img=${project.img}></my-card>`
    })

    const $section = $('section')

    $section.html(final.join(""))

})

// Paper

const $paper = $('#paper')
const $menu = $('#menu')

$paper.on('click', (event) => {

    if ($menu.css('display') === 'flex'){
        $menu.css('display', 'none')
    } else {
        $menu.css('display', 'flex')
    }
})