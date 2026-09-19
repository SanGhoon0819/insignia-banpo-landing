# 인시그니아 반포 이미지 자산

이 폴더는 `index.html` 내부 base64 이미지를 제거하고 실사 이미지를 외부 파일로 관리하기 위한 구조입니다.

권장 파일명
- `hero.webp` : 기존 히어로 이미지를 외부화한 파일
- `exterior-01.webp` : 조감/외관
- `living-01.webp`, `living-02.webp` : 거실 실사
- `kitchen-01.webp` : 주방 실사
- `bedroom-01.webp` : 침실 실사
- `bathroom-01.webp`, `bathroom-02.webp` : 욕실 실사 추가 슬롯
- `community-01.webp`, `community-02.webp` : 커뮤니티 실사 추가 슬롯
- `unit-59.webp`, `unit-84.webp` : 타입 이미지/평면

운영 원칙
1. HTML에 base64 이미지를 다시 넣지 않습니다.
2. WebP 우선, 필요 시 AVIF/JPG를 사용합니다.
3. 히어로는 1600px 안팎, 가급적 350KB 이하를 목표로 합니다.
4. 갤러리 이미지는 1200~1600px, 가급적 250KB 이하를 목표로 합니다.
5. 욕실·커뮤니티 이미지는 파일만 추가하고 HTML의 해당 `src`를 교체하면 되도록 구성합니다.
6. 가격 숫자는 이미지 파일에도 삽입하지 않습니다.
