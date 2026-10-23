# EDITORIAL WORKFLOW & CONTENT MAINTENANCE GUIDE

**Project:** Dr. J. Arawindhan Ji — Global Digital Authority Platform  
**Target Audience:** Non-technical Content Coordinators, Translators, Fact Checkers  

---

## 1. 8-Stage Publication Lifecycle

To maintain factual integrity and bilingual consistency, every content addition follows this sequence:

```
[1. Source Extraction] 
       │
       ▼
[2. English Draft Prepared]
       │
       ▼
[3. Fact Verification against Primary Records] (Assigned Claim ID)
       │
       ▼
[4. Authorized Approval from Coordinator / Subject]
       │
       ▼
[5. Tamil Translation by Native Linguist] (Consult TAMIL_TERMINOLOGY_GLOSSARY.md)
       │
       ▼
[6. Tamil Cultural & Tone Review]
       │
       ▼
[7. Publication to Codebase / JSON Data Registers]
       │
       ▼
[8. Scheduled Bi-Monthly Review]
```

---

## 2. Practical How-To Guide for Non-Technical Coordinators

### 2.1 How to Add a New Book
1. Open [src/data/books.ts](file:///e:/App/MD%20website/src/data/books.ts).
2. Copy an existing `BookItem` block.
3. Provide:
   - `id`: Unique ID (e.g., `BK-008`)
   - `slug`: URL slug (e.g., `future-ready-2035`)
   - `title`: English and Tamil titles
   - `tagline`: One-sentence core premise
   - `author`: "Dr. J. Arawindhan Ji"
   - `edition` and `status`
   - `summary`: Paragraph description in EN and TA
   - `keyThemes`: 4 bullet points in EN and TA
   - `targetAudience`: Target group
4. Add corresponding entry in [MASTER_CLAIMS_REGISTER.csv](file:///e:/App/MD%20website/MASTER_CLAIMS_REGISTER.csv).

### 2.2 How to Add a New Educational Methodology
1. Open [src/data/education.ts](file:///e:/App/MD%20website/src/data/education.ts).
2. Append a new `EducationalExhibit` object with `id`, `slug`, `title`, `whatItIs`, `howItWorks`, and `evidenceAndReach`.
3. Add a corresponding claim ID and ensure Tamil translations match the glossary.

### 2.3 How to Add a New Award or Recognition
1. Open [src/data/recognition.ts](file:///e:/App/MD%20website/src/data/recognition.ts).
2. Add entry to either `personalHonours` or `institutionalAccolades`.
3. Set `verificationStatus` to `CONFIRMED` only if certificate or primary broadcast is verified; otherwise set to `PENDING_VERIFICATION` or `SOURCE_CLAIM`.

### 2.4 How to Publish a Speech or Thought Leadership Piece
1. Open [src/data/media.ts](file:///e:/App/MD%20website/src/data/media.ts).
2. Append article object with `slug`, `title`, `category`, `date`, `excerpt`, and `fullContent`.
