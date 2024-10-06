 li {
        width: 130px;
        height: 30px;
        border: none;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 20px;
        box-shadow: 0px 1px 4px #a2a2a2;
        font-family: "AzonixRegular";
        font-size: 11px;
        transition: all 1s ease;

      }


.logo {
      display: flex;
      justify-content: center;
      margin-bottom: 10px;
      img {
        width: 45px;
        margin-top: 10px;
      }
    }




    <div className="logo">
          <img src="/public/images/phonedekho logo 1.png" alt="" />
          <span>Phone Dekho</span>
        </div>
        .logo {
      display: flex;
      justify-content: center;
      margin-bottom: 10px;
      gap: 20px;
      align-items: center;
      
      img {
        transition: all 0.5s ease;
        width: 45px;
        margin-top: 10px;
      }
      span{
        display: none;
        transition: all 0.5s ease;
        font-size: 30px;
        font-family: "Lequire DEMO";
        margin-top: 10px;
      }

      &:hover{
        img{
          margin-left: -100px;
        }
        span{
          display : block;
        }
        span::after {
        animation: textChange 4s infinite; 
       
      }
      }
     

    }
    write css in which the text will change in every 1 second 
