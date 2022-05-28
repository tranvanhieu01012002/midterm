import React from 'react'

export default function Form(props) {
    console.log(props.posting);
  return (
    <>
        <form onSubmit={props.submit}>
      <div className="form-group row">
      <label htmlFor="title" className="col-sm-2 col-form-label">title</label>
      <div className="col-sm-10">
      <input type="text" onChange={props.changeHandler} value={props.posting.title} className="form-control" id="title" name='title' placeholder="title" />
      </div>
    </div>
    <div className="form-group row">
      <label htmlFor="content" className="col-sm-2 col-form-label">Content</label>
      <div className="col-sm-10">
        <input type="text" onChange={props.changeHandler} value={props.posting.content} name='content' className="form-control" id="content" placeholder="content" />
      </div>
    </div>
    <div className="form-group row">
      <label htmlFor="file" className="col-sm-2 col-form-label">Image</label>
      <div className="col-sm-10">
        <input type="file" onChange={props.changeHandler}  name='img' className="form-control" id="image" placeholder="content" />
      </div>
    </div>
    <div className="form-group row">
      <label htmlFor="file" className="col-sm-2 col-form-label">Image</label>
      <div className="col-sm-10">
        <img style={{width:"200px"}} src={"./images/"+props.posting.img} alt='ffff'></img>
      </div>
    </div>
    <div className="form-group row">
      <label htmlFor="file" value={props.posting.show} className="col-sm-2 col-form-label">tHỂ LOẠI</label>
      <div className="col-sm-10">
      <select onChange={props.changeHandler}  value={props.posting.show} className="form-control" name='show' id="exampleFormControlSelect1">
      <option selected={props.posting.show === "tin chính"}  value="tin chính">tin chính</option>
      <option selected={props.posting.show ==="tin sốt dẻo"} value="tin sốt dẻo">tin sốt dẻo</option>
      <option selected={props.posting.show === "tin mới nhất"} value="tin mới nhất">tin mới nhất</option>
    </select>
      </div>
    </div>
    <button id="submit"  type="submit" class="btn btn-primary">{props.action}</button>
  </form>
    </>
  )
}
