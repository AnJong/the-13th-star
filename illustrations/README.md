# Illustrations

비트별 AI 일러스트가 들어갈 폴더.

## 파일명 규칙

`beat-{N}.webp` 또는 `beat-{N}.jpg` (Beat 11.5는 `beat-11_5`)

예시:
- `beat-1.webp` — 그날 저녁 (소은 마당, 청록빛)
- `beat-3.webp` — 별채에서 별이를 만난 첫 순간
- `beat-12.webp` — 마당의 별 (가족이 별을 보는 풍경)

## 추가 방법

1. AI 도구 (Midjourney / Stable Diffusion / ChatGPT Image / Nano Banana 등)로 일러스트 생성
2. WebP 또는 JPG로 저장 (모바일 데이터 절약을 위해 WebP 권장, 600~800px 너비)
3. 이 폴더에 파일명 규칙에 맞게 저장
4. `data.js`의 해당 비트 객체에 `illustration` 필드 추가:

```js
{
  id: 1,
  title: "그날 저녁",
  illustration: { src: "illustrations/beat-1.webp", alt: "마당에서 별을 보는 소은", caption: "" },
  family: [...],
  ...
}
```

5. `git add . && git commit && git push` — GitHub Pages 자동 배포

## 비트별 prompt 가이드 (제안)

E.T. → 삼체 톤 아크. 가족 컷은 따뜻한 베이지·노랑, 추적팀 컷은 차가운 모노. 외계인은 회청색 + 내부 빛 알갱이.

### Act 1 — 점진적 발견

| Beat | 장면 | 톤 / 색감 | Prompt 키워드 |
|---|---|---|---|
| 1 | 소은이 마당에서 청록빛을 봄 | 따뜻한 가을 저녁 보랏빛 | autumn evening, suburban backyard, korean girl 10yo, watching teal-green meteor, sketchpad, warm |
| 2 | 야산에서 별이 첫 발견 | 부드러운 아침 햇살 | small alien, gray-blue skin, branchlike fingers, sitting under bush, korean girl crouching, dawn |
| 3 | 별채 안 — 빛 가루 마술 | 따뜻한 노란 햇빛 | warm storage shed interior, alien on inhaler box, light dust drifting, girl smiling, sunlight beams |
| 5 | 사거리 — 시간 정지의 0.5초 | 긴장된 차가운 톤 | korean street intersection, delivery truck frozen mid-motion, girl falling backwards, time-stopped feeling |
| 6 | 별채에서 천식 발작 멎음 | 따뜻한 청록 광방출 | alien glowing teal, korean teen boy crouching, girl breathing, healing light particles, awe |
| 7 | 도윤 노트북 + 분광 그래프 | 어두운 방, 청록 화면 빛 | teen boy at laptop, oscilloscope display, alien sitting nearby, late afternoon |
| 11 | 가족 4인이 함께 별이 옆에 | 가족 영화 톤 | family of four sitting around small alien, warm storage shed, son daughter mother father |
| 11.5 | 새벽 진료실 (재석 단독) | 차가운 모노 | korean doctor at night, prescription office, burner phone, audio modulator, single desk lamp |
| 12 | 마당에서 베가를 가리킴 | 가족 영화 + 차가운 별빛 | family on garden bench at night, alien pointing at star, telescope, vega briefly dimming |
| 14 | 새벽 호송 차 안 | 어둠 + 청록빛 | family in car at dawn, daughter holding glowing alien on lap, mother in passenger seat, headlights |
| 15 | 야산 추격 | 새벽 어둠 + 손전등 | korean countryside hill in pre-dawn darkness, three figures running with alien, distant flashlights pursuing |

## 라이선스 / 출처

AI 생성 일러스트는 사용 도구의 라이선스를 따른다. 상업 사용 가능 여부 확인 필요.

크레딧 명시는 footer 또는 별도 `CREDITS.md`에서.
