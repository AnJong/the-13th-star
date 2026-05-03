# 「13번째 별」 AI 일러스트 생성 지시서 (v2)

이 문서는 **ChatGPT Image / GPT-Image-1 / Nano Banana / Midjourney / Stable Diffusion / Flux** 등 AI 이미지 생성 도구에 입력할 prompt와 톤 가이드다.

생성 후 `web/illustrations/beat-{N}.webp`로 저장 → `data.js`의 비트에 `illustration: { src, alt, caption }` 필드 추가 → push.

---

## ⚠️ 가장 중요한 규칙 — 외계인은 절대 직접 보이지 않는다

> **외계인(별이)은 *어떤 일러스트에도 프레임 안에 직접 보이지 않는다*.**
> 얼굴, 전신, 윤곽, 실루엣, 신체 부위 어떤 것도 명시적으로 그리지 않는다.
> 독자/관객의 *상상의 영역*을 침범하지 않는다.

E.T.는 외계인을 *친밀한 캐릭터*로 보여줘 따뜻함을 만들었지만, 본 작품의 톤 아크는 *E.T. → 삼체*다. 외계인을 *직접 보지 못하는 우주적 거리감*이 더 작품에 맞다. 일러스트도 같은 원칙으로 — 시각적 *흔적·잔광·그림자·시선*만 사용한다.

별이의 존재는 다음 *간접 모티프로만* 암시한다:

| 모티프 | 시각 표현 |
|---|---|
| **빛 가루의 흩어짐** | 공중에 떠다니는 옅은 금빛 가루. 햇빛 광선 안에서 부유. |
| **회청색 잔광** | 가족의 손·옷·벽에 묻은 옅은 회청색 빛 반사. |
| **시선 방향** | 가족의 얼굴이 *프레임 밖의 무언가*를 향함. 그 시선이 곧 별이의 위치 암시. |
| **빈 자리** | 매트리스·흡입기 박스·평상에 *비어 있어야 할 형체가 안 보이는* 자리. |
| **그림자의 가장자리** | 프레임 모서리에서 슬쩍 드리운 작은 그림자. 형체는 안 보임. |
| **외부 영향만** | 별이가 *일으키는 효과* 만 보임 — 별 흐려짐, 차량 ECU 정지 잔향, 천식 발작 멎음 등. |

**Prompt에 자주 쓰는 키워드:**
- `"alien just out of view"`, `"off-frame presence"`, `"unseen entity off-frame"`
- `"drifting golden light dust in sunbeam"`, `"tiny gold particles floating"`
- `"subtle teal-cyan glow reflecting on surfaces"`
- `"character looking at something off-frame, awe in their face"`
- `"empty space where a figure should be"`
- `"only the light it casts, never the source"`

**금지 (절대 X):**
- ❌ 외계인 얼굴·머리·몸통·전신 어떤 형태로든 직접 묘사
- ❌ 외계인 눈·코·입·손·발·손가락 등 어떤 신체 부위든 직접
- ❌ 외계인의 윤곽 실루엣 (명확한 형체 X — 윤곽도 안 보임)
- ❌ E.T. 식 친밀하게 보이는 외계인 캐릭터화

---

## 1. 작품 개요 (먼저 AI에게 컨텍스트로 알려주기)

> 한 가족이 집 마당에 떨어진 작은 외계 생명체를 만난다. 부상 입은 외계인을 가족이 보살피는 동안 점점 정이 든다. 그러나 외계인은 사실 *항성을 자원으로 보는 종족*의 정찰병이고, 가족의 도움이 *수확 임무*에 기여하고 있었다는 사실이 추적팀에 의해 밝혀진다. 가족은 끝까지 진실을 모른 채 외계인을 자기 우주선까지 호송한다.
>
> 톤 아크: **E.T.(1막) → 삼체(3막)**. 따뜻한 가족 영화로 시작해 점차 코스믹 호러의 무게가 깔린다. 한국 교외(김포) 단독주택 배경. **외계인은 일러스트에서 절대 직접 보이지 않는다 — 시선·빛·잔광으로만 암시.**

---

## 2. 시각 스타일 가이드

### 2.1 전체 톤
- **Cinematic painterly illustration** (영화적 페인팅 일러스트)
- 영감: *Studio Ghibli (My Neighbor Totoro의 따뜻한 정서) + Blade Runner 2049 (차가운 SF 무게) + Annihilation (보이지 않는 외계 위협)*
- A24 영화 색감 — 깊은 어둠 + 절제된 채도 + 강조된 한 색
- *Korean magic realism* — 사실적 한국 교외 + 별이의 빛 가루 같은 환상적 요소 (단, 별이 자체는 안 보임)

### 2.2 색 팔레트

| 이름 | HEX | 사용처 |
|---|---|---|
| Warm cream | `#f5d99c` | 가족 컷, 따뜻함 |
| Teal-cyan | `#a8d4f5` | 외계인 잔광 (별이의 *간접* 표시) |
| Deep navy | `#0a0a0d` | 밤 배경, 추적팀 |
| Cool gray | `#c8c8d0` | 추적팀 톤 |
| Autumn purple | `#6b5b73` | 가을 저녁 하늘 |
| Glow yellow | `#ffe6a7` | 별이의 빛 가루 |
| Pale gray-blue | `#9bc0d4` | (절대 별이 외피로 직접 사용 X — 표면 잔광에만) |

### 2.3 Technique 키워드
```
painterly, soft edges, no hard outlines, slight film grain, volumetric lighting,
atmospheric haze, subtle color graduation, hand-drawn feeling, A24 color grade,
35mm film aesthetic, slightly desaturated, cinematic depth of field,
"the unseen suggested through light and gaze"
```

### 2.4 비율·해상도
- **풀블리드 모바일 우선** — `9:16` 세로 (1080×1920) 또는 `4:5` (1080×1350)
- PC 호환 — `16:9` 가로 (1920×1080)
- 핵심 피사체는 *상단 60% 영역*에 배치

---

## 3. 캐릭터 시트 (인물 일관성)

### 3.1 하소은 — 10세, 초등 4학년 *(주인공 / 별이 발견자)*
```
Korean girl, 10 years old, around 138cm, slightly thin build.
Shoulder-length black hair with slight natural wave, straight soft bangs
(often pushed aside). Big eyes with faint double eyelid, easily startled
expression. Small mole near left mouth corner. Always color pencil stains
on fingertips. Wears soft pastels — yellow, mint, light purple hoodies,
leggings, sneakers. Carries a small inhaler box (asthma).
```

### 3.2 하도윤 — 16세, 고1
```
Korean teen boy, 16 years old, around 175cm tall, thin with narrow shoulders.
Black hair, slightly long covering eyebrows. Black plastic frame glasses.
Default expression: neutral / half-smirk. Home: dark hoodie + sweatpants.
Outside: clean shirt + slacks. Always with earphones. Often carrying a laptop.
```

### 3.3 하재석 — 47세, 가정의학과 의사
```
Korean man, 47, 175cm, thin. Short hair with light gray at temples.
Light brown horn-rimmed glasses. Slightly drooping mouth corners but warm
eyes when smiling. Long thin hands. Clinic: white doctor coat. Home: neat
beige cotton pants + clean shirt.
```

### 3.4 김지은 — 43세, 초등 교사
```
Korean woman, 43, 162cm, average build. Bob-length hair (jaw level), slight
natural wave, black. Minimal makeup, lip tint only. Clean blouses + slacks
(work), comfortable clothes at home. Easy laugh, half-moon eyes when smiling.
```

### 3.5 별이 — 외계인 *(절대 직접 묘사하지 않음)*

> **이 섹션은 캐릭터 시트가 아니라 *간접 표현 가이드*다.** 별이의 외형은 어떤 일러스트에도 직접 그리지 않는다. 그러나 *간접 시그널의 일관성*을 위해 다음 모티프만 사용한다.

**별이의 *암시* 시그널 (이것만 사용):**

1. **금빛 부유 입자 (gold floating particles)**
   - 햇빛/달빛 광선 안에서 천천히 떠다님
   - 사람의 손 가까이 흩어졌다 사라짐
   - 풀잎·옷·벽에 잠깐 묻었다가 사라짐
   - 색: `#ffe6a7` 정도의 옅은 금빛, 채도 낮음

2. **회청색 빛 잔광 (subtle teal-cyan reflection)**
   - 별이가 가까이 있을 때 — 가족의 옷·손·얼굴에 옅은 청록 빛이 *반사*됨
   - 직접 광원은 안 보임. *반사된 빛*만.

3. **사람의 시선·자세**
   - 가족 얼굴이 *프레임 모서리 또는 바깥*을 향함
   - 손이 *무언가를 향해* 뻗어 있음 (그러나 끝에 아무것도 안 그림)
   - 무릎을 꿇고 *낮은 무언가*를 보는 자세

4. **빈 자리·간접 사물**
   - 매트리스 위 *비어 있는* 자리
   - 흡입기 박스 위 *천만 깔려 있고* 그 옆에 시선이 모임
   - 평상 위 *별이의 자리*에 다육식물 화분만 있음

5. **별이의 *효과*만 시각화**
   - 베가 별이 *흐려진 1초의 순간* (Beat 12)
   - 트럭 헤드라이트가 *시간 정지된 듯* 멈춤 (Beat 5)
   - 천식 발작 후 *호흡이 풀리는* 순간 (Beat 6, 8)
   - 차량 ECU 정지 후 *시동이 다시 걸리는* 잔향 (Beat 14, 15)

**캐릭터 시트가 아닌 *부재의 시트*로 입력:**
```
The alien (별이) is NEVER directly visible in any illustration. No face,
no body, no silhouette, no outline. The alien's presence is implied only
through:
- Drifting tiny golden light particles in the air or sunbeam
- Faint teal-cyan glow reflecting on nearby surfaces (skin, fabric, wood)
- Characters looking toward an empty corner or off-frame, with awe or
  attention in their faces
- Hands reaching toward something not drawn
- An empty mattress / box / chair where a small figure might be
- Effects only: a star slightly dimmer, a truck stopped mid-motion,
  breathing easing — without showing the cause

Render the alien as ABSENCE shaped by light and gaze. Never as form.
```

### 3.6 한지원 — 42세, ICR 한국지부 작전 책임자
```
Korean woman, 42 years old, 168cm, solid muscular build. Short bob, chin-length,
black, no gray. Minimal makeup, just nude lip. Headquarters: dark navy/black suit.
Field: black functional jacket + boots, military digital wristwatch. Direct
lingering gaze. Small old scar on left wrist.
```

### 3.7 박해원 — 38세, 외계지능 분석가
```
Korean man, 38, 173cm, lean. Slightly long hair covering ears. Round metal-frame
glasses. Tired focused expression. Casual: shirt + jeans + cardigan. Long thin
fingers, fast on keyboard. Headphones around neck.
```

---

## 4. 환경·소품 일관성

### 4.1 가족 집
- 김포시 외곽 단독주택, 작은 뒷마당 + 텃밭 + **창고형 별채**
- 별채는 햇빛 잘 듦 (별이의 광합성 환경 — 단, 별이 본체 안 보임)
- 야산이 집 뒤편

### 4.2 별채 내부
- 작은 매트리스 (소은 침대에서)
- **빈 흡입기 박스 + 천 한 장** ← 별이의 *자리*. 그러나 박스 위는 *비어 있게* 또는 *떠다니는 빛 가루만*
- 도윤의 클래식 라디오 + 노트북 + 분광기 USB
- 소은의 그림 더미 (회청색 + 노랑 점)
- 소독약 병, 거즈 봉지

### 4.3 추적팀 거점
- 가족 집에서 1km 떨어진 빈 단독주택
- 모니터 여러 대, 콘솔, 통신 장비

---

## 5. 비트별 Prompt

> 각 비트의 prompt에는 §3 (해당 인간 캐릭터 시트) + 위의 *별이 부재 시트*를 함께 컨텍스트로 입력.

---

### Beat 1 — 그날 저녁

**(A) 장면**: 가을 저녁 마당. 평상에 스케치북. 하늘에 청록빛 짧은 빛이 그어짐. 소은이 색연필을 든 채 올려다봄. *(별이는 아직 등장하지 않음 — 이 비트는 별이 묘사 문제 없음)*

**(B) Prompt:**
```
A serene autumn evening in suburban Gyeonggi-do, Korea. Korean single-family
house with small back garden. A 10-year-old Korean girl (see character sheet
for 하소은) sitting on a low wooden platform (평상), looking up at the sky
with one teal-green colored pencil in hand. A short, bright teal-green
streak of light cuts across the violet evening sky — like a meteor but the
wrong color. Distant kitchen window glow behind her. Painterly cinematic
illustration, A24 color grade, soft edges, slight film grain. 9:16 mobile.
```

**(C) Negative:** photorealistic, anime style, watermark, text.

---

### Beat 2 — 야산에서

**(A) 장면**: 토요일 새벽. 소은이 야산 풀숲에서 빛 가루를 따라가다 *그것*을 발견. **별이 본체는 안 보이고 — 빛 가루 + 소은의 표정만.**

**(B) Prompt:**
```
Early dawn in a low Korean hill (야산) covered in autumn dry grass. A
10-year-old Korean girl (see 하소은) crouched on a path, looking intently
at something just beyond the frame's edge — soft golden glow spilling
from behind a small rock that occupies the lower-left corner of the frame.
Tiny golden light particles drift in misty dawn air, catching faint dawn
light. Her hand is half-extended, palm up, frozen mid-gesture. Her face
is full of fragile awe, lips slightly parted, eyes locked on the unseen
source. We never see what she sees — only the gold dust scatter and her
expression. The alien is OFF-FRAME, only suggested by light and her gaze.
Painterly, atmospheric, gentle awe.
```

**(C) Negative:** alien creature visible, ET style, anime, photographic,
showing the source of the light.

---

### Beat 3 — 별채와 별이

**(A) 장면**: 오후, 별채 안. 햇빛 안에서 *빛 가루 마술*이 떨어지고 있고, 소은이 그것을 향해 손을 뻗음. **별이 본체는 프레임 바깥. 빛만 보임.**

**(B) Prompt:**
```
Interior of a small Korean storage shed (별채), warm afternoon sunlight
beams through wooden slats. A 10-year-old Korean girl (see 하소은) sits
on the wooden floor in the lower-right of the frame, mouth slightly open,
hand outstretched as if catching falling light. Tiny golden light particles
cascade gently down through the sunbeam in front of her — drifting from
somewhere just outside the upper-left frame edge. A small inhaler box
sits open on a folded cloth in front of her, with an empty space beside
it where something small might rest. Pure wonder on the girl's face.
We NEVER see the source of the light, only its scatter. The presence is
felt only through gold dust and her gaze. Painterly, warm and intimate,
slight haze.
```

**(C) Negative:** alien visible, creature in frame, ET-style cute alien,
sci-fi tech, anime.

---

### Beat 4 — 오빠가 본 것

**(A) 장면**: 도윤 방 책상. 동생의 비밀에 대한 의심. *(별이 등장 X)*

**(B) Prompt:**
```
A 16-year-old Korean teen boy (see 하도윤) sitting at his cluttered bedroom
desk in late afternoon, laptop just closed. NASA APOD photo of Andromeda
galaxy still visible as desktop wallpaper. He stares at the ceiling, lost
in thought. Earphones around his neck. Bedroom dim, only desk lamp on.
Through the door crack, a small medicine bag visible in the next room.
Painterly, intimate, suburban Korean teen room aesthetic.
```

**(C) Negative:** anime, manga, K-drama style, posed photography.

---

### Beat 5 — 사거리에서

**(A) 장면**: 사거리에서 트럭이 *시간 정지처럼* 멈춤. 소은이 옆으로 미끄러져 떨어진 직후. 도윤이 골목에서 뛰어나옴. **별이의 *효과*만 — 정지된 트럭. 별이 본체 X.**

**(B) Prompt:**
```
A Korean suburban street intersection at late afternoon. A delivery truck
frozen mid-motion, headlights still on, front wheels visibly skidding
sideways without forward motion. A 10-year-old girl (see 하소은) just
landed on the asphalt by the curb (knees scraped, alive), her body
suspended in the impossible aftermath of a sideways slide. A 16-year-old
teen boy (see 하도윤) running out of an adjacent alley, panic on his face.
Truck driver halfway out of cab, hands trembling. Time-stopped surreal
feeling — slight motion blur isolated to wheels, everything else
preternaturally still. Cinematic, tense, painterly, A24 grade. The cause
of the stop is invisible — there is no creature in the frame, only the
unnatural pause.
```

**(C) Negative:** action movie, dramatic explosion, anime, alien visible.

---

### Beat 6 — 별채에서 (도윤 합류)

**(A) 장면**: 별채. 소은의 천식 발작이 1분 만에 멎는 순간. 도윤이 직접 목격. **별이 본체는 안 보이고 — 따뜻한 노란 빛 halo + 빛 가루만 + 두 남매의 시선.**

**(B) Prompt:**
```
Interior of small Korean storage shed (별채). A 10-year-old Korean girl
(see 하소은) sits on a thin mattress in the center of the frame, her
shoulders relaxing, breathing visibly easing — gentle recovery from an
asthma attack. A 16-year-old teen boy (see 하도윤) crouches in the
doorway, mouth slightly open, witnessing in awe. Both siblings are
looking toward the lower-right corner of the frame — to something
unseen just outside our view. From that off-frame direction, a soft
warm yellow halo of light spills onto the girl's face and chest, faint
golden ion mist drifting toward her face. We do NOT see the source.
Only the light it casts on the two siblings, only their awe at what
they see. Sacred, hushed mood. Slight grain.
```

**(C) Negative:** alien visible, creature, ET style, supernatural horror,
anime cute, glowing creature in frame.

---

### Beat 7 — 남매 공범 + 분석가 도윤

**(A) 장면**: 별채. 도윤 노트북 분광기 + 라디오. 소은이 그림. *별이는 그들 사이에 있어야 할 자리에 — 빈 자리 또는 빛 가루로만.*

**(B) Prompt:**
```
Interior of Korean storage shed (별채), afternoon. A 16-year-old Korean
teen boy (see 하도윤) at small table with laptop showing a colorful
spectrogram graph. Small spectrometer USB plugged in, pointing toward
an empty mattress in the upper-left of the frame. The mattress has only
a small folded cloth on it — the space above it shimmers faintly with
suspended golden light particles. A 10-year-old girl (see 하소은) on
the floor sketching with colored pencils, glancing toward that same
empty space with a soft smile. A small classical music radio playing
in the corner. The siblings are both attending to something unseen on
the mattress. Quiet conspiracy. Painterly, intimate, gentle late afternoon
light.
```

**(C) Negative:** alien visible, creature on mattress, sci-fi lab, anime.

---

### Beat 8 — 빨래에 묻은 빛 + 두 번째 발작

**(A) 장면**: 김지은이 별채 문을 연 순간. 소은의 천식 발작이 멎는 광경. **별이 본체 X — 따뜻한 빛 + 어머니의 충격 + 딸의 호흡 회복.**

**(B) Prompt:**
```
A Korean storage shed (별채) doorway, afternoon. A 43-year-old Korean
woman (see 김지은) just opened the door, frozen mid-step — laundry
basket dropped behind her at her feet. Inside the shed, her 10-year-old
daughter (see 하소은) on a mattress, breathing visibly easing. From the
lower-left corner of the frame — outside our view — a warm yellow glow
spills onto the daughter, soft ion mist drifting in the light beam.
The mother's hand clutches the doorframe. Her face: shock + understanding
+ maternal resolve all at once. The source of the light is unseen. We
witness only what the mother witnesses: her child healing in the warmth
of an absent presence. Painterly, tense, sacred. Late afternoon golden
light cutting through dust motes.
```

**(C) Negative:** alien visible, creature, horror, anime, melodrama.

---

### Beat 9 — 한 사람만 모르는 식탁

**(A) 장면**: 가족 식탁. 어색한 침묵. *(별이 등장 X)*

**(B) Prompt:**
```
A Korean family dinner table — kimchi-jjigae stew steaming in the center,
four small bowls of rice and side dishes. Father (see 하재석) at one end,
mother (see 김지은) opposite, two children (see 하도윤, 하소은) on either
side. The father's gaze is on the others, slight squint of detection. The
other three are subtly avoiding eye contact. Painterly, warm domestic
Korean kitchen lighting, dim ceiling pendant. Tense quiet beneath domestic
surface.
```

**(C) Negative:** TV drama, sitcom, anime, photo studio lighting.

---

### Beat 10 — 아빠가 본 것

**(A) 장면**: 새벽 진료실/별채. 재석이 손전등으로 *무언가*를 진료 중. *별이 본체 X — 손전등 빛, 진료기록부, 의사의 표정만.*

**(B) Prompt:**
```
Late night, dimly lit Korean home clinic exam space. A 47-year-old Korean
man (see 하재석) in white doctor's coat, kneeling beside a low examination
surface. He's holding a medical penlight pointed downward at something
*just below frame edge* — not visible to us. The surface in front of him
shows only a folded cloth with faint golden particles suspended above it.
An open medical journal on his lap, the word "광합성" (photosynthesis)
just written in Korean handwriting. His face: clinical observation + dread.
Single overhead lamp creates strong chiaroscuro. We do not see what he is
examining. Painterly, tense, A24 grade.
```

**(C) Negative:** alien visible, creature on table, ER drama, anime,
supernatural horror.

---

### Beat 11 — 가족 합류 완성

**(A) 장면**: 별채. 가족 4인이 빈 매트리스 주위에 둘러앉음. 모두 *동일한 방향*을 바라봄. *별이는 그 방향에 있지만 안 보임.*

**(B) Prompt:**
```
Interior of Korean storage shed (별채), warm afternoon. Four Korean family
members (see 하재석, 김지은, 하도윤, 하소은) sitting in a loose semicircle
around an empty mattress in the upper-right of the frame. The mattress is
subtly illuminated by an unseen warm yellow source — golden particles
suspended in the sunbeam above it. All four family members are looking
toward the mattress with quiet attention, gentle smiles. The youngest
(daughter) is closest, her hand resting near the edge of the cloth. Children's
drawings on the wall behind — colored pencil sketches of a family of four
plus one small undefined warm shape in the middle. Old classical radio
playing. The father sits slightly farther from the mattress than the others.
The family is gathered around an absence shaped by light. Painterly, golden
hour through wood slats.
```

**(C) Negative:** alien creature visible, anime, sitcom, posed family photo.

---

### Beat 11.5 — 새벽의 진료실 (재석 단독)

**(A) 장면**: 새벽 두 시 진료실. 재석 혼자. 익명 신고. *(별이 등장 X)*

**(B) Prompt:**
```
A small Korean home medical clinic room at 2 AM, single desk lamp on. A
47-year-old Korean doctor (see 하재석) sitting alone at his desk in lab coat
over pajamas. A burner phone in his hand. A small audio modulator device
plugged into it. His mouth slightly open, mid-sentence. His other hand grips
the edge of the desk, knuckles white. The medical journal on the desk has
a single line written: "오늘 했다." Cold guilt. Almost monochrome cool gray
with single warm desk lamp. Painterly, tense, deeply silent.
```

**(C) Negative:** spy thriller, action, anime.

---

### Beat 12 — 마당의 별

**(A) 장면**: 마당의 망원경. 가족 4인. 별이가 가리킨 베가가 *흐려지는 1초*. **별이 본체 X — 가족 4인 + 망원경 + 베가 + 빈 자리.**

**(B) Prompt:**
```
Korean suburban back garden at night. Four Korean family members (see
하재석, 김지은, 하도윤, 하소은) gathered around an old refractor telescope
on a low wooden platform (평상). On the platform between them, a small
clay flowerpot with a single succulent — surrounded by a faint, almost
invisible halo of warm yellow light suspended in the air, as if a small
unseen something is sitting there. None of the family looks at the pot
directly — they are all looking up at the sky, but their bodies are gathered
around the empty space on the platform. A single bright star (Vega) in the
upper portion of the frame is visibly slightly dimmer than the others — a
subtle dimming arc 0.4 seconds in. The teen son (see 하도윤) at the
telescope eyepiece, his face just lifting in realization. The daughter
holds her hand near the pot, palm down, as if comforting an unseen friend.
Painterly, profound mood, A24 cosmic horror creeping in beneath warmth.
The alien is present only as light and absence on the platform.
```

**(C) Negative:** alien visible on platform, creature, anime, K-drama,
astronomy textbook.

---

### Beat 13 — 단서들이 만나는 자리

**(A) 장면**: 부엌 식탁. 가족 4인이 단서를 모음. *별이는 한 컷에 등장 X. 오직 가족과 멀리 보이는 위협 신호만.*

**(B) Prompt:**
```
A Korean family kitchen table at evening, dim warm lighting. Four people
(see 하재석, 김지은, 하도윤, 하소은) gathered intently. The teen boy
holds his phone open showing a notes app. The father has a clinic patient
file open. The mother is mid-sentence with a worried expression. The
10-year-old daughter holds a drawing of a small undefined shape colored
slightly darker blue than usual. Above the table, in the distance through
the window, a single car waits at the corner of the street. Tension rising,
family realizing they're being watched. Painterly, subtle dread, warm but
cooling.
```

**(C) Negative:** thriller stock, anime, photo journalism.

---

### Beat 14 — 새벽의 호송

**(A) 장면**: 새벽 호송 차 안. *별이 본체 X — 소은의 무릎 위에 청록빛 후광만.*

**(B) Prompt:**
```
Interior of a Korean family sedan, predawn darkness. Four people inside
(see 하재석 driving, 김지은 passenger seat, 하도윤 and 하소은 in back).
The 10-year-old girl in the back seat holds something invisible in her
arms — a faint teal-cyan glow emanates from her lap, suspended golden
particles drifting around her hands. She cradles the empty space gently
against her chest. Through the back windshield, two pairs of yellow
headlights visible in the distance, following. The father's hands tight
on the steering wheel, jaw set. The mother's hand reaching back to touch
her daughter's. Cinematic, low-key lighting, atmospheric haze. The
unseen presence in the daughter's arms is the entire emotional center
of the frame. Dread + maternal protection.
```

**(C) Negative:** alien visible on lap, creature, car chase action movie,
K-drama, anime, posed.

---

### Beat 15 — 야산

**(A) 장면**: 야산 흙길. 가족 셋이 정상 방향으로 뜀. *별이 본체 X — 소은이 가슴에 안고 있는 *희미한 청록빛*만.*

**(B) Prompt:**
```
Predawn darkness on a low Korean hill (야산), narrow dirt path. Three
Korean family members — mother (see 김지은), teen son (see 하도윤),
10-year-old daughter (see 하소은) — running uphill. The daughter cradles
something against her chest — a fading teal-cyan glow emanates from
between her arms, faint golden particles trailing behind her in the cold
air, like dying embers. We do not see what she carries. The teen son holds
a laptop under his arm, its screen the only visible light source illuminating
their faces from below. Far behind them, downhill, several flashlights and
a car's headlights bobbing upward in pursuit. Wet dewy grass, cold breath
in the air. The cosmic-horror weight settles in the disparity between what
the family is desperately protecting and what we, the audience, can never
fully see. Painterly, desperate beauty, full A24 grade.
```

**(C) Negative:** alien visible, creature in arms, action movie chase,
horror jumpscare, anime, photographic.

---

## 6. 출력 사양

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
       alt: "마당에 누운 소은 위로 청록빛 별똥별이 그어진다",
       caption: ""
     },
     family: [...]
   }
   ```
3. `git add . && git commit -m "Add illustration for Beat N" && git push`
4. GitHub Pages 자동 배포 (1~2분)

## 8. 톤 일관성 체크리스트

생성 후 모든 일러스트가 다음을 만족하는지 확인:

- [ ] **외계인 본체가 직접 프레임 안에 보이지 않음** (얼굴·몸통·실루엣 X)
- [ ] 외계인의 *간접 시그널*만 사용 (빛 가루, 청록 잔광, 시선 방향, 빈 자리)
- [ ] 인물 외형이 §3 캐릭터 시트와 일치
- [ ] 색 팔레트 안 (지나친 채도 X, 형광색 X)
- [ ] 한국 교외 (서구 X, 일본 X)
- [ ] 텍스트·워터마크 없음
- [ ] 모바일 9:16 또는 4:5 비율로 핵심 피사체가 상단 60%
- [ ] *Painterly* 느낌 (사진 X, 만화 X)
- [ ] 톤 아크 — Beat 1~11은 따뜻함 우세, Beat 12부터 차가움 침투, Beat 13~15는 차가움 우세

## 9. 참고

작품 톤·세계관 자세히는 형제 폴더의 `architecture/` 참조:
- `architecture/canon.md` — 공개 사실
- `architecture/canon-truth.md` — 진실 (스포일러 주의)
- `architecture/family-personas.md` — 가족 4인 상세
- `architecture/alien-persona.md` — 별이 상세 (개념 이해용 — 일러스트엔 절대 직접 노출 X)
- `architecture/pursuit-team-personas.md` — 추적팀 상세
- `architecture/scene-flow.md` — 16비트 골격

산문 본문은 `final/novel.md`.

---

## 변경 이력

- v2 (이번 변경): 외계인 직접 묘사 금지 규칙 도입. 별이 캐릭터 시트 → 부재 시트로. 비트별 prompt 11개 (별이 등장 비트) 모두 *간접 표현*으로 재작성.
- v1: 초기 가이드 (외계인 직접 묘사 포함).
