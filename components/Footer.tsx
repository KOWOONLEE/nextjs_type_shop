export default function Footer() {
  return (
    <div className="footerContainer">
      <div className="footerLeft">
        <p>C/S Center</p>
        <p>070.123.1234</p>
        <p>평일 AM 10:00 ~ PM 18:00 | 점심시간 12:00 ~ 13:00</p>
        <p>토,일, 공휴일 휴무</p>
      </div>
      <div className="footerRight">
        <p>COMPANY INFO</p>
        <p>
          상호 : (주)고우니코스메틱 | 대표 : 고우니 | 사업자등록번호 :
          111-11-11111
        </p>
        <p>통신판매업신고 : 2022-수원영통-00000 (사업자정보확인)</p>
        <p>전화 : 070.123.1234 | 주소 : 경기도 수원시 영통구 123</p>
        <p>COPYRIGHT 2022(주)고우니코스메틱 ALL RIGHTS RESERVED</p>
      </div>

      <style jsx>{`
        .footerContainer {
          display: flex;
          justify-content: space-between;
          border-top: 1px solid gray;
          font-size: 15px;
          padding: 15px;
          line-height: 5px;
        }
      `}</style>
    </div>
  );
}
