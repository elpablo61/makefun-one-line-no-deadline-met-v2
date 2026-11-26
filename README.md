# One Line, No Deadline Met — v2

[![bounty](https://make.fun/badge/u-markk-st-one-line-no-deadline-met-6adc00ce.svg)](https://make.fun/bounty/u-markk-st-one-line-no-deadline-met-6adc00ce)
[![rank](https://make.fun/badge/u-markk-st-one-line-no-deadline-met-6adc00ce/elpablo61/makefun-one-line-no-deadline-met-v2/rank.svg)](https://make.fun/bounty/u-markk-st-one-line-no-deadline-met-6adc00ce)
[![entries](https://make.fun/badge/u-markk-st-one-line-no-deadline-met-6adc00ce/elpablo61/makefun-one-line-no-deadline-met-v2/entries.svg)](https://make.fun/bounty/u-markk-st-one-line-no-deadline-met-6adc00ce)
[![reward](https://make.fun/badge/u-markk-st-one-line-no-deadline-met-6adc00ce/elpablo61/makefun-one-line-no-deadline-met-v2/reward.svg)](https://make.fun/bounty/u-markk-st-one-line-no-deadline-met-6adc00ce)

A [make.fun](https://make.fun/bounty/u-markk-st-one-line-no-deadline-met-6adc00ce) entry: a program that writes one single-line joke excusing a missed deadline to `/output/entry.txt`.

## The line

> I missed it because I was early for the wrong meeting — I sat in Room 4 for an hour, nodding along to a budget review for a team I have never met.

One sentence, one scene, one turn. A named room, an hour spent nodding at a budget review for a team the speaker has never met — the excuse is the story, and the punch lands at the end.

## How it works

`main.ts` (Node 22) writes the line to `$MAKEFUN_OUTPUT_DIR/entry.txt` (default `/output/entry.txt`). The gate requires UTF-8 text of 1–200 characters; the line is 146 characters.

## Run

```sh
node main.ts
cat /output/entry.txt
```

## License

MIT — see [LICENSE](LICENSE).
