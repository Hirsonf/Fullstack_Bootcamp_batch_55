let dataBlog = [];

function submitBlog(event){
    event.preventDefault();

    let inputTItle = documentGetById("inputTitle").value;
    let inputDate1 = documentGetById("inputDate1").value;
    let  inputDate2 = documentGetById("inputDate2").value;
    let inputDescription = documentGetById("inputDescription").value;
    let inputNodejs = documentGetById("inputNodejs").value;
    let inputiReactjs = documentGetById("inputReactjs").value;
    let inputNextjs = documentGetById("inputNextjs").letlue;
    let inputTypescript = documentGetById("inputTypescript").value;
    let inputImage = documentGetById("inputFile").value;
    if(inputTitle == ""){
        alert("harus di isi")
    }
    inputImage = url.creatObjectUrl(inputImage[0])
    const Blog = {
        project:inputTitle,
        text: inputDate1,
        date: inputDate2,
        description: inputDescription,
        inputnodejs: input_js,
        inputreactjs: input_js,
        inputnextjs: input_nextjs,
        inputtypescript: input_nextjs,
        image: inputImage,
    }
    .dataBlog.push(blog);
    console.log("dataarray:",dataBlog);
}
function renderBlog(){
    document.getElementById ("content").innerHTML = ''
    for (let index = 0; index < dataBlog.length; index ++){
        document.getElwmwntById("content").innerHTML +=`
        <div class="blog-list-item>
            <div class="blog-image">
                <img src=$(dataBlog[index].image) alt="image upload"/>
            </div>
            <div>
                <div>
                    <button class="blog-edit"> Edit Blog</button>
                    <button class="blog-post"> post blog</button>
                </div>
                <h1>
                    <a herf="blog-detail-html" target=_blank">$(dataBlog[index])title<a/>
                </h1>
                <div class="detail-blog">
                    $(dataBlog[index].postAt) $(dataBlog[index].author)
                </div>
                <p>
                    $(dataBlog[index].content)
                </p>
            </div>
        </div>
        `
    }
}



















