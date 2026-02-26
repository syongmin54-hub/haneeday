# haneeday static site

## Cloudflare Pages 배포
- 빌드 과정 없이 정적 파일 그대로 업로드합니다.
- 배포 대상: `/index.html`, `/products.html`, `/brew.html`, `/collab.html`, `/contact.html`, `/assets/*`

## Formspree endpoint 교체 방법
- `index.html` 과 `contact.html`의 `form` 태그 `action` 값을 원하는 Formspree endpoint로 교체합니다.
- 현재 endpoint: `https://formspree.io/f/mjgelybw`

## 인스타그램 임베드 교체 방법
- `assets/script.js` 상단의 `INSTAGRAM_POSTS` 배열에 게시물 URL을 넣으면 자동 임베드됩니다.
- 예시:
  ```js
  const INSTAGRAM_POSTS = [
    "https://www.instagram.com/p/POST_ID_1/",
    "https://www.instagram.com/p/POST_ID_2/",
    "https://www.instagram.com/p/POST_ID_3/"
  ];
  ```
- 배열이 비어 있으면 "@haneeday_tea 보러가기" 버튼 UI가 표시됩니다.

## TODO
1. 네이버스토어 링크 확정 후 `products.html`의 스토어 버튼 연결
2. 인스타그램 게시물 URL 확정 후 `assets/script.js`에 추가
3. 실제 패키지 이미지/브랜드 사진 적용 시 홈/제품 섹션에 이미지 영역 추가
