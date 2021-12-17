console.log(html`<b>${process.argv[2]} says</b>: "${process.argv[3]}"`);

function html(templateSegements, ...params) {
    let result = templateSegements[0]

    for (let index = 0; index < params.length; index++) {
        result += params[index].replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&apos;");
        result += templateSegements[index + 1]


    }
    return result
}


//fail