export default async function handler(req, res) {
  const serviceKey = process.env.API_KEY; // Vercel Settings에서 등록한 변수명
  const baseUrl = 'https://apis.data.go.kr/1741000/ChildrensPlayFacilitiesRegion/getChildrensPlayFacilitiesRegion';
  
  // 호출 파라미터 설정 (JSON 형식을 선호할 경우 type=json 추가)
  const url = `${baseUrl}?serviceKey=${serviceKey}&type=json&numOfRows=20&pageNo=1`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    
    // 클라이언트에 데이터 전달 (CORS는 Vercel 내부 호출이므로 자동 해결)
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: '데이터를 가져오는 데 실패했습니다.', details: error.message });
  }
}
