# 「13번째 별」 AI 일러스트 생성 지시서

이 문서는 **ChatGPT Image / GPT-Image-1 / Nano Banana / Midjourney / Stable Diffusion / Flux** 등 AI 이미지 생성 도구에 입력할 prompt와 톤 가이드다. 16비트 단편의 각 비트 일러스트를 생성하는 데 사용한다.

생성 후 `web/illustrations/beat-{N}.webp`로 저장 → `data.js`의 비트에 `illustration: { src, alt, caption }` 필드 추가 → push.

---

## 1. 작품 개요 (먼저 AI에게 컨텍스트로 알려주기)

> 한 가족이 집 마당에 떨어진 작은 외계 생명체를 만난다. 부상 입은 외계인을 가족이 보살피는 동안 점점 정이 든다. 그러나 외계인은 사실 *항성을 자원으로 보는 종족*의 정찰병이고, 가족의 도움이 *수확 임무*에 기여하고 있었다는 사실이 추적팀에 의해 밝혀진다. 가족은 끝까지 진실을 모른 채 외계인을 자기 우주선까지 호송한다.
>
> 톤 아크: **E.T.(1막) → 삼체(3막)**. 따뜻한 가족 영화로 시작해 점차 코스믹 호러의 무게가 깔린다. 한국 교외(김포) 단독주택 배경.

---

## 2. 시각 스타일 가이드

### 2.1 전체 톤
- **Cinematic painterly illustration** (영화적 페인팅 일러스트)
- 영감: *Studio Ghibli (My Neighbor Totoro의 따뜻한 정서) + Blade Runner 2049 (차가운 SF 무게)*
- A24 영화 색감 — 깊은 어둠 + 절제된 채도 + 강조된 한 색
- *Korean magic realism* — 사실적 한국 교외 + 별이의 빛 알갱이 같은 환상적 요소

### 2.2 색 팔레트

| 이름 | HEX | 사용처 |
|---|---|---|
| Warm cream | `#f5d99c` | 가족 컷, 따뜻함 |
| Teal-cyan | `#a8d4f5` | 외계인 빛 (별이) |
| Deep navy | `#0a0a0d` | 밤 배경, 추적팀 |
| Cool gray | `#c8c8d0` | 추적팀 톤 |
| Autumn purple | `#6b5b73` | 가을 저녁 하늘 |
| Glow yellow | `#ffe6a7` | 별이의 따뜻한 감정 색 |
| Pale gray-blue | `#9bc0d4` | 별이 외피 기본색 |

### 2.3 Technique 키워드
```
painterly, soft edges, no hard outlines, slight film grain, volumetric lighting,
atmospheric haze, subtle color graduation, hand-drawn feeling, A24 color grade,
35mm film aesthetic, slightly desaturated, cinematic depth of field
```

### 2.4 비율·해상도
- **풀블리드 모바일 우선** — `9:16` 세로 (1080×1920) 또는 `4:5` (1080×1350)
- PC 호환 — `16:9` 가로 (1920×1080)도 가능. 둘 다 만들면 베스트.
- 핵심 피사체는 *상단 60% 영역*에 배치 (모바일에서 caption 가려지지 않도록)

---

## 3. 캐릭터 시트 (인물 일관성 중요)

> AI에게 *각 인물 외형*을 명확히 알려야 비트별로 일관된 이미지가 나온다. 첫 생성 시 캐릭터 시트를 함께 입력. 이후엔 *Beat-N character: 별이 (see character sheet)* 식으로 참조.

### 3.1 하소은 — 10세, 초등 4학년 *(주인공 / 별이 발견자)*
```
Korean girl, 10 years old, around 138cm, slightly thin build.
Shoulder-length black hair with slight natural wave, straight soft bangs
(often pushed aside). Big eyes with faint double eyelid, easily startled
expression. Small mole near left mouth corner. Always color pencil stains
on fingertips. Wears soft pastels — yellow, mint, light purple hoodies,
leggings, sneakers. Carries a small inhaler box (asthma) — sometimes
visible in pocket or hand.
```

### 3.2 하도윤 — 16세, 고1 *(분석가, 두 번째 합류)*
```
Korean teen boy, 16 years old, around 175cm tall, thin with narrow shoulders.
Black hair, slightly long covering eyebrows. Black plastic frame glasses.
Default expression: neutral / half-smirk (one corner of mouth lifts).
Home: dark hoodie + sweatpants. Outside: clean shirt + slacks. Always with
earphones. Often carrying a laptop.
```

### 3.3 하재석 — 47세, 가정의학과 의사 *(아빠, 세 번째 합류 — 양면성)*
```
Korean man, 47 years old, 175cm, thin (often skips meals due to clinic work).
Short hair with light gray at temples. Light brown horn-rimmed glasses.
Slightly drooping mouth corners but warm eyes when smiling. Long thin hands,
slightly cool. Clinic: white doctor coat. Home: neat beige cotton pants +
clean shirt. Often pockets hands in coat.
```

### 3.4 김지은 — 43세, 초등 교사 *(엄마, 두 번째 합류 직접 목격자)*
```
Korean woman, 43, 162cm, average build. Bob-length hair (jaw level), slight
natural wave, black. Minimal makeup, lip tint only. Wears clean blouses +
slacks (work), comfortable clothes at home. Easy laugh, half-moon eyes.
Small warm hands (always touching her children's foreheads gently).
```

### 3.5 별이 — 외계인 *(Photoautotrophic Colonial)*
> **이 캐릭터의 시각 표현이 작품의 핵심.** 정확히 묘사해야 함.

```
Small alien, approximately 1 meter tall, slim and slightly hunched (injured).
Skin: pale gray-blue (#9bc0d4), subtly shifts color with surrounding light
and emotion (warmer yellow when grateful, darker bluish when stressed).

CRITICAL FEATURE — INTERIOR LIGHT:
Inside the translucent skin, tiny golden light particles flow slowly like
fish in a clear stream. These are micro-photosynthetic units (a colonial
organism). They speed up under direct sunlight, slow in shadow.

EYES: Two large oval eyes — actually clusters of light receptors fused into
two focal points. Black with subtle internal shimmer.

NOSE: Absent. Small respiratory slit where nose would be (does evaporative
cooling, not gas exchange).

HANDS: 4 branch-like fingers per hand, NOT human-like. Fingertips
occasionally dissolve into mist and re-coalesce — a key visual signature
of the colonial nature.

MOUTH: Vestigial, almost absent. Doesn't eat human food.

CLOTHING: None. Skin itself is the protective layer + photosynthesis.

INJURY: A small fissure on one side of the torso — pale golden light dust
slowly leaks from the crack (NOT blood — this is "light dust" particles).

TONE: NOT cute like E.T. Should evoke *fragility + alien strangeness
coexisting*. The viewer should feel both compassion and unease.
```

### 3.6 한지원 — 42세, ICR 한국지부 작전 책임자 *(추적팀 리더)*
```
Korean woman, 42 years old, 168cm, solid muscular build (military background).
Short bob, chin-length, black, no gray. Minimal makeup, just nude lip. Headquarters:
dark navy/black suit. Field: functional black jacket + boots, military digital
wristwatch. Direct lingering gaze. Small old scar on left wrist.
Carries dual phones (personal + work). Coffee in hand often.
```

### 3.7 박해원 — 38세, 외계지능 분석가
```
Korean man, 38, 173cm, lean. Slightly long hair covering ears. Round metal-frame
glasses. Default tired/focused expression (frequent overnight shifts). Casual:
shirt + jeans + cardigan. Long thin fingers, fast on keyboard. Always with
headphones around neck.
```

---

## 4. 환경·소품 일관성

### 4.1 가족 집
- 김포시 외곽 단독주택 (경기도 신곡사거리 인근 분위기)
- 작은 뒷마당 + 텃밭 + **창고형 별채** (자재 보관용 단층, 자물쇠 가능)
- 별채는 *햇빛 잘 듦* — 별이의 광합성 환경
- 도시 광원에서 떨어져 있어 *별이 잘 보임*
- 야산이 집 뒤편

### 4.2 별채 내부
- 작은 매트리스 (소은 침대에서 가져온 것)
- 흡입기 박스 (별이의 첫 잠자리)
- 도윤의 클래식 라디오 + 노트북 + 분광기 USB
- 소은의 그림 더미 (회청색 + 노랑 점)
- 소독약 병, 거즈 봉지

### 4.3 추적팀 거점
- 가족 집에서 1km 떨어진 빈 단독주택
- 모니터 여러 대, 콘솔, 통신 장비
- 임시 군용 책상 + 의자
- 옆집을 임차했음을 알 수 있는 *임시성*

---

## 5. 비트별 Prompt

> 각 비트마다 **(A) 장면 요약** + **(B) 추천 prompt** + **(C) negative prompt**.
> AI에게 입력 시 **§2 (시각 스타일) + §3 (해당 캐릭터 시트) + 비트 prompt**를 함께 넣을 것.

---

### Beat 1 — 그날 저녁

**(A)** 가을 저녁 일곱 시 사십 분, 김포 외곽 단독주택 마당. 평상에 스케치북. 하늘에 청록빛 짧은 빛이 그어짐. 소은이 색연필을 든 채 올려다봄.

**(B) Prompt:**
```
A 10-year-old Korean girl (see character sheet for 하소은) sitting on a low
wooden platform in the small back garden of a Korean suburban house at autumn
twilight. She holds a single teal-green colored pencil, sketchbook open beside
her. Her face is tilted up toward the violet-blue sky where a short, bright
teal-green streak of light cuts across — almost like a meteor but the color is
wrong. Distant kitchen window glow behind her. Quiet, warm, expectant mood.
Painterly cinematic illustration, A24 color grade, soft edges, slight film
grain, no hard outlines.
```

**(C) Negative:** photorealistic, anime style, watermark, text, western
suburb, bright cheerful E.T. style, hard digital outlines.

---

### Beat 2 — 야산에서

**(A)** 토요일 새벽, 소은이 야산 풀숲에서 빛 가루 묻은 풀잎을 따라가다 *그것*(별이)을 발견. 회색 돌인 줄 알았는데 숨을 쉬는 작은 형체.

**(B) Prompt:**
```
Early dawn in a low Korean hill (야산) covered in autumn dry grass. A
10-year-old Korean girl (see 하소은) crouches, looking down at a small
gray-blue creature huddled under a rock — see character sheet for 별이
(photoautotrophic colonial alien, 1m tall, golden light particles flowing
inside translucent skin, branch-like fingers). Tiny golden light dust on
nearby grass blades, faintly shimmering in pale dawn light. Mist still rising
from the ground. Painterly, atmospheric, gentle awe.
```

**(C) Negative:** cute Disney style, ET 1982 style, anime, photographic.

---

### Beat 3 — 별채와 별이

**(A)** 오후, 창고형 별채 안. 별이가 흡입기 박스 위 천에 앉아 있고, 손가락 끝에서 *작은 빛 가루*를 흩뿌리는 마술. 소은이 입을 벌리고 환호.

**(B) Prompt:**
```
Interior of a small Korean storage shed (별채), warm afternoon sunlight beams
through wooden slats. A small alien (see character sheet for 별이) sits on a
small inhaler box covered with cloth, raising one hand. Tiny golden light
particles drift from the alien's branch-like fingertips into the sunbeams,
floating like dust motes. A 10-year-old Korean girl (see 하소은) sits on the
floor in front of the alien with mouth open, hand outstretched as if to
catch the light. Pure wonder. Painterly, warm and intimate, slight haze.
```

**(C) Negative:** dark, scary, anime cute, sci-fi tech aesthetic.

---

### Beat 4 — 오빠가 본 것

**(A)** 도윤이 자기 방 책상 앞에서 노트북을 닫으며 천장 봄. 옆에 진료실 가방. 동생의 비밀에 대한 의심.

**(B) Prompt:**
```
A 16-year-old Korean teen boy (see 하도윤) sitting at his cluttered bedroom
desk in late afternoon, laptop just closed. NASA APOD photo of Andromeda
galaxy still visible as desktop wallpaper. He stares at the ceiling, lost
in thought. Earphones around his neck. Bedroom is dim, only desk lamp on.
Through the door crack, a small medicine bag visible in the next room. Mood:
puzzled curiosity. Painterly, intimate, suburban Korean teen room aesthetic.
```

**(C) Negative:** anime, manga, K-drama style, posed photography.

---

### Beat 5 — 사거리에서

**(A)** 사거리에서 트럭이 *시간 정지처럼* 멈춰 있음. 소은이 옆으로 미끄러져 떨어진 직후. 도윤이 골목에서 뛰어나오는 중. 운전자 패닉.

**(B) Prompt:**
```
A Korean suburban street intersection at late afternoon. A delivery truck
frozen mid-motion, headlights still on, front wheels visibly skidding
sideways. A 10-year-old girl (see 하소은) just landed on the asphalt by the
curb (knees scraped, alive). A 16-year-old teen boy (see 하도윤) running out
of an adjacent alley, panic on his face. Truck driver halfway out of cab,
hands trembling. Time-stopped surreal feeling — slight motion blur isolated
to wheels, everything else preternaturally still. Cinematic, tense,
painterly, A24 grade.
```

**(C) Negative:** action movie, dramatic explosion, anime, K-drama.

---

### Beat 6 — 별채에서 (도윤 합류)

**(A)** 별채 안. 소은이 천식 발작 중. 별이가 외피 광방출 + 호흡 슬릿 이온 발산으로 *발작이 멎는 순간*. 도윤이 무릎 꿇고 직접 목격.

**(B) Prompt:**
```
Interior of small Korean storage shed (별채). A 10-year-old Korean girl
(see 하소은) sits on a thin mattress, breathing visibly slowing — gentle
recovery from asthma attack. Beside her, the small alien (see 별이) glows
warmer — pale yellow light particles inside its skin moving faster, faint
ion mist drifting from a small slit (where nose would be) toward the girl's
face. The mist looks like a soft golden halo. A 16-year-old teen boy (see
하도윤) crouches in the doorway, mouth slightly open, witnessing in awe.
Sacred, hushed mood. Painterly, soft beams of golden afternoon light through
shed slats, slight haze.
```

**(C) Negative:** medical drama, hospital aesthetic, supernatural horror,
anime cute, glowing effects overdone.

---

### Beat 7 — 남매 공범 + 분석가 도윤

**(A)** 별채 안. 도윤이 노트북에 분광기 USB로 별이 외피 빛 측정 중. 별이가 노트북 화면을 들여다봄. 옆에 소은이 그림 그리는 중.

**(B) Prompt:**
```
Interior of Korean storage shed (별채), afternoon. A 16-year-old Korean teen
boy (see 하도윤) at small table with laptop showing a colorful spectrogram
graph. Small spectrometer USB plugged in, pointing at a small alien (see 별이)
sitting nearby. The alien's two large eyes are looking at the laptop screen,
its skin color subtly matching the teal-cyan of the graph. A 10-year-old
girl (see 하소은) on the floor sketching with colored pencils, focused. A
small classical music radio playing in the corner. Quiet conspiracy of
siblings. Painterly, intimate, gentle late afternoon light.
```

**(C) Negative:** sci-fi lab, professional studio, anime.

---

### Beat 8 — 빨래에 묻은 빛 + 두 번째 발작

**(A)** 별채 안. 소은이 천식 발작. 김지은이 별채 문을 열고 그 자리에서 *별이가 멎게 하는 순간*을 직접 목격. 어머니의 충격 + 결의.

**(B) Prompt:**
```
A Korean storage shed (별채) doorway, afternoon. A 43-year-old Korean woman
(see 김지은) just opened the door, frozen mid-step — laundry basket dropped
behind her. Inside, her 10-year-old daughter (see 하소은) on a mattress,
breathing visibly easing. The small alien (see 별이) beside her glows warm
yellow, soft ion mist drifting toward the girl's face. The mother's hand
clutches the doorframe. Her face: shock + understanding + maternal resolve
all at once. Painterly, tense, sacred. Late afternoon golden light cutting
through dust motes.
```

**(C) Negative:** horror, anime, melodrama, hospital scene.

---

### Beat 9 — 한 사람만 모르는 식탁

**(A)** 가족 식탁. 네 사람 평소처럼 김치찌개. 그러나 어머니/도윤/소은 셋이 미묘하게 어색. 아빠만 그것을 *눈치 채는 순간*.

**(B) Prompt:**
```
A Korean family dinner table — kimchi-jjigae stew steaming in the center, four
small bowls of rice and side dishes. Father (see 하재석) at one end, mother
(see 김지은) opposite, two children (see 하도윤, 하소은) on either side. The
father's gaze is on the others, slight squint of detection. The other three
are subtly avoiding eye contact — son focused on stew, daughter looking at
her hand under the table, mother quiet. The father has caught a beat of
silence. Painterly, warm domestic Korean kitchen lighting, dim ceiling pendant.
Tense quiet beneath domestic surface.
```

**(C) Negative:** TV drama, sitcom, anime, photo studio lighting.

---

### Beat 10 — 아빠가 본 것

**(A)** 새벽 진료실 또는 별채. 재석이 손전등으로 별이를 진료. 진료기록부에 *광합성*이라고 적는 손. 의사적 두려움.

**(B) Prompt:**
```
Late night, dimly lit Korean home clinic room (small medical office attached
to a doctor's home). A 47-year-old Korean man (see 하재석) in white doctor's
coat, kneeling beside a small alien (see 별이) on a low examination surface.
He's holding a medical penlight that he keeps moving toward and away from the
alien's skin — observing how the internal golden light particles speed up
when illuminated. An open medical journal on his lap, the word "광합성"
(photosynthesis) just written in Korean handwriting. His face: clinical
observation + dread. Single overhead lamp creates strong chiaroscuro.
Painterly, tense, A24 grade.
```

**(C) Negative:** ER drama, action, anime, supernatural horror.

---

### Beat 11 — 가족 합류 완성

**(A)** 별채 안. 가족 4인이 함께 별이 옆에 앉아 있음. 소은이 그린 가족 그림. 라디오 베토벤. 평화로운 한 순간 (그러나 아빠는 약간 멀리).

**(B) Prompt:**
```
Interior of Korean storage shed (별채), warm afternoon. Four Korean family
members (see 하재석, 김지은, 하도윤, 하소은) sitting in a loose circle
around a small alien on a mattress (see 별이). Children's drawings on the
wall behind — colored pencil sketches of family of four with the alien in
the middle. Old classical radio playing. Mood: hard-earned peace, gentle.
But the father sits slightly farther than the others — visual marker of
his ambivalence. Painterly, golden hour light streaming through wood slats.
```

**(C) Negative:** sitcom, anime, posed studio family photo.

---

### Beat 11.5 — 새벽의 진료실 (재석 단독)

**(A)** 새벽 두 시 진료실. 재석 혼자. 일회용 휴대폰 + 음성 변조 핸즈프리. 익명 신고하는 순간.

**(B) Prompt:**
```
A small Korean home medical clinic room at 2 AM, single desk lamp on. A
47-year-old Korean doctor (see 하재석) sitting alone at his desk in lab coat
over pajamas. A burner phone in his hand. A small audio modulator device
plugged into it. His mouth slightly open, mid-sentence — making a hidden
phone call. His other hand grips the edge of the desk, knuckles white. The
medical journal on the desk has a single line written: "오늘 했다." (I did
it today.) Mood: cold guilt + heavy moral weight. Almost monochrome cool
gray with single warm desk lamp. Painterly, tense, deeply silent.
```

**(C) Negative:** spy thriller, action, anime, courtroom drama.

---

### Beat 12 — 마당의 별

**(A)** 마당. 가족이 별이와 함께 망원경으로 별 보기. 별이가 베가를 가리키는 순간. 그 별이 *흐려지는* 1초 (도윤만 봄).

**(B) Prompt:**
```
Korean suburban back garden at night. Four Korean family members (see
하재석, 김지은, 하도윤, 하소은) gathered around an old refractor telescope
on a low platform. The small alien (see 별이) sits on the platform between
them, raising one branch-like finger toward a single bright star (Vega).
That star is visibly slightly dimmer — a subtle dimming arc 0.4 seconds in.
Soft warm yellow halo around the alien's body (color of gratitude). The
teen son (see 하도윤) at the telescope eyepiece, his face just lifting in
realization — ONE PERSON who saw the star dim. Family doesn't notice.
Painterly, profound mood, A24 cosmic horror creeping in beneath warmth.
```

**(C) Negative:** astronomy textbook, horror, anime, K-drama.

---

### Beat 13 — 단서들이 만나는 자리

**(A)** 부엌 식탁. 가족 4인이 각자 단서를 모은 후 *처음 합쳐 본 순간*. 도윤 휴대폰 메모, 김지은 옆집 이야기, 재석 진료실 환자. 별이의 외피가 어두워진 색.

**(B) Prompt:**
```
A Korean family kitchen table at evening, dim warm lighting. Four people
(see 하재석, 김지은, 하도윤, 하소은) gathered intently. The teen boy
holds his phone open showing a notes app. The father has a clinic patient
file open. The mother is mid-sentence with a worried expression. The
10-year-old daughter holds a drawing of the alien — but the alien in her
drawing is colored DARKER blue than usual. Above the table, in the
distance through the window, a single car waits at the corner of the
street. Tension rising, family realizing they're being watched. Painterly,
subtle dread, warm but cooling.
```

**(C) Negative:** thriller stock, anime, photo journalism.

---

### Beat 14 — 새벽의 호송

**(A)** 새벽 4시. 가족 차 안에서 별이가 소은의 무릎 위에 응집된 상태. 재석이 운전. 백미러에 추격 차량 헤드라이트.

**(B) Prompt:**
```
Interior of a Korean family sedan, predawn darkness. Four people inside (see
하재석 driving, 김지은 passenger seat, 하도윤 and 하소은 in back). The
10-year-old girl cradles a small alien on her lap — its skin paler than
before, golden light particles inside moving slowly (fading). Through the
back windshield, two pairs of yellow headlights visible in the distance,
following. The father's hands tight on the steering wheel, jaw set. The
mother's hand reaching back to touch her daughter's. Cinematic, low-key
lighting, atmospheric haze, dread + maternal protection.
```

**(C) Negative:** car chase action movie, K-drama, anime, posed.

---

### Beat 15 — 야산

**(A)** 야산 흙길. 새벽 어둠. 가족 셋(엄마+도윤+소은)과 별이가 정상 방향으로 뛰어 올라감. 노트북 액정 빛 하나에 의지. 멀리 추격 차량 라이트.

**(B) Prompt:**
```
Predawn darkness on a low Korean hill (야산), narrow dirt path. Three Korean
family members — mother (see 김지은), teen son (see 하도윤), 10-year-old
daughter (see 하소은) — running uphill. The daughter cradles a small alien
(see 별이, skin now PALE BLUE — a critical color shift indicating worsening
injury) tightly to her chest. The teen son holds a laptop under his arm, its
screen the only visible light source illuminating their faces from below.
Far behind them, downhill, several flashlights and a car's headlights bobbing
upward in pursuit. Wet dewy grass, cold breath in the air. Painterly,
desperate beauty, full A24 cosmic-horror grade.
```

**(C) Negative:** action movie chase, horror jumpscare, anime, photographic.

---

## 6. 출력 사양 요약

| 항목 | 값 |
|---|---|
| 비율 | 9:16 (모바일 우선) 또는 16:9 / 4:5 |
| 해상도 | 최소 1080×1920 (모바일), 1920×1080 (PC) |
| 형식 | WebP 권장 (JPG OK) |
| 파일명 | `beat-{N}.webp` (예: `beat-11.webp`, `beat-11_5.webp`) |
| 위치 | `web/illustrations/` |
| 텍스트 | 모두 제거 (워터마크·자막·서명 X) |

## 7. 통합 절차

1. AI 도구로 일러스트 생성 → `web/illustrations/beat-{N}.webp` 저장
2. `web/data.js`의 해당 비트에 추가:
   ```js
   {
     id: 1,
     title: "그날 저녁",
     illustration: {
       src: "illustrations/beat-1.webp",
       alt: "마당에서 별을 그리던 소은 위로 청록빛이 그어진다",
       caption: ""  // 선택, 비워도 됨
     },
     family: [...],
     ...
   }
   ```
3. `git add . && git commit -m "Add illustration for Beat N" && git push`
4. GitHub Pages 자동 배포 → 1~2분 후 라이브 반영

## 8. 톤 일관성 체크리스트

생성 후 모든 일러스트가 다음을 만족하는지 확인:

- [ ] 캐릭터 외형이 시트와 일치 (특히 별이의 *내부 빛 알갱이* + *손끝 안개*)
- [ ] 색 팔레트 안 (지나친 채도 X, 형광색 X)
- [ ] 한국 교외 (서구 X, 일본 X)
- [ ] 텍스트·워터마크 없음
- [ ] 모바일 9:16 또는 4:5 비율로 핵심 피사체가 상단 60% 안
- [ ] *Painterly* 느낌 (사진 X, 만화 X)
- [ ] 톤 아크 — Beat 1~11은 따뜻함 우세, Beat 12부터 차가움이 침투, Beat 13~15는 차가움 우세

## 9. 참고

작품 톤·세계관 자세히는 형제 폴더의 `architecture/` 참조:
- `architecture/canon.md` — 공개 사실
- `architecture/canon-truth.md` — 진실 (스포일러 주의)
- `architecture/family-personas.md` — 가족 4인 상세
- `architecture/alien-persona.md` — 별이 상세
- `architecture/pursuit-team-personas.md` — 추적팀 상세
- `architecture/scene-flow.md` — 16비트 골격

산문 본문은 `final/novel.md`에서 읽고 비트별 분위기 직접 확인 가능.
