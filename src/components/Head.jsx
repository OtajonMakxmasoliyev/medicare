import React from 'react'
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

import Header_img from "../images/Header1.png"
import PlayArrowOutlinedIcon from '@mui/icons-material/PlayArrowOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import ContentPasteIcon from '@mui/icons-material/ContentPaste';

const Head = () => {

  const items = []

  const data = [
    {
      title: `about your health`,
      span: `We care`,
      info: `Good health is the state of mental, physical and social well being and it does not just mean absence of diseases.`,
      back_image: Header_img
    },
    {
      title: `about your health`,
      span: `We care`,
      info: `Good health is the state of mental, physical and social well being and it does not just mean absence of diseases.`,
      back_image: Header_img
    },
    {
      title: `about your health`,
      span: `We care`,
      info: `Good health is the state of mental, physical and social well being and it does not just mean absence of diseases.`,
      back_image: Header_img
    },
  ]

  for (let i = 0; i < 3; i++) {
    const div = <div className='Head' style={{ background: `url(${data[i].back_image}), linear-gradient(#1E1E1E, #1E1E1E)`, height: "620px", backgroundRepeat: "no-repeat", backgroundSize: "cover" }}>
      <div className="Head__block">
        <p><span>{data[i].span}</span><br /> {data[i].title}</p>
        <p className='info'>{data[i].info}</p>


        <div className="Head__block__block">
          <div className="Head__block__block_buttons">
            <button className='book'>Book an appointment</button>
            <div className="playBlock">
              <button className='play'><PlayArrowOutlinedIcon /></button>
            </div>
            <span>Watch videos</span>
            <p className='become'>Become member of our hospital community? <a href="#">Sign up</a></p>
          </div>
          <div className="Head__block_buttons__two">
            <button>
              <SearchOutlinedIcon />
              <p>
                Well Qualified doctors
                <br />
                <span>Treat with care</span>
              </p>
            </button>
            <button>
              <ContentPasteIcon />
              <p>
                Book an appointment
                <span>Online appointment</span>
              </p>
            </button>
          </div>
        </div>



      </div>
    </div>;
    items.push(div)

  }
  console.log(items);

  return (
    <div>
      <AliceCarousel mouseTracking items={items} infinite={true} autoPlay={true} autoPlayInterval={1500} />
    </div>
  )
}

export default Head