---
title: "ChatGPT 大潮汹涌，一起奔向潮头的方向"
description: "OpenCat客户端 YYDS"
date: 2023-07-09
imageUrl: "/public/image/openCat.png"
---

<style>
  /* Light theme */
:root {
  --link-blue-hsl: hsl(183, 75%, 12%);
  --border-hsl: hsl(175, 82%, 32%);
  --border-background-hsl: hsla(175, 82%, 32%, 0.1);
  --border-color-hsl: hsla(240, 6%, 25%, 1);
}

/* Dark theme */
.dark {
  --link-blue-hsl: hsl(183, 75%, 12%);
  --border-hsl: hsl(175, 82%, 32%);
  --border-background-hsl: hsla(175, 82%, 32%, 0.1);
  --border-color-hsl: hsla(60, 100%, 98%, 0.86);
}

.blockquote {
  padding: 0.5em 1.2em !important;
  border-left: 3px solid var(--border-hsl) !important;
  width: 100%;
  box-sizing: border-box !important;
  background-color: var(--border-background-hsl) !important;
  color: var(--border-color-hsl) !important;
}
img {
  display: inline-block;
}
.page-item.active .page-link {
  color: var(--link-blue-hsl) !important;
}
h2 {
  text-align: left !important;
  margin-block-start: 0.83em !important;
  margin-block-end: 0.83em !important;
  margin-inline-start: 0px !important;
  margin-inline-end: 0px !important;
  color: var(--border-hsl) !important;
  border-top: none !important;
}

</style>

## ChatGPT

2023 年上半年最火热的应用，当属 ChatGPT 无疑了。

现在的 ChatGPT 应用在 PC 端(https://openai.com/chatgpt)和 iOS 端(https://apps.apple.com/us/app/chatgpt/id6448311069)都可以使用。

不过 ChatGPT 需要注册，而且其 Plus 版本 现在需要收费，售价 20 美元/月。

毕竟我们日常工作中可以通过 ChatGPT 来辅助我们，那么还有没有更好的方式来顺利使用 ChatGPT 呢？

还真有，OpenAI 公司除了提供付费版本的 ChatGPT Plus 之外，还给开发者们提供了 OpenAI API，供开发这开发客户端的时候调用 OpenAI API。

OpenAI API 是按量付费的。 以`GPT-3.5 Turbo 16K`模型为例：每使用 1000 个 tokens，花费开发者 0.004 美元的费用。在英语中“一个 token 通常对应大约 4 个字符”，而 1 个汉字大致是 2~2.5 个 token。 1000 tokens 大概是 750 单词。

以`GPT-3.5 Turbo 16K`模型为例, 大概 4 美元可以访问 100 万个 token，相当于 750000 个单词。 75 万个单词只要不到 30 块钱人民币，够便宜的了。如果是以`GPT-3.5 Turbo 4K`模型为例, 大概 2 美元就可以访问 100 万个 token, 也就是不到 15 块钱。相比于 ChatGPT Plus 每个月 20 美元的费用，还是很划算的。

GPT-3.5 Turbo:

| Model       | Input               | Output             |
| ----------- | ------------------- | ------------------ |
| 4K context  | $0.0015 / 1K tokens | $0.002 / 1K tokens |
| 16K context | $0.003 / 1K tokens  | $0.004 / 1K tokens |

GPT-4:

| Model       | Input             | Output            |
| ----------- | ----------------- | ----------------- |
| 8K context  | $0.03 / 1K tokens | $0.06 / 1K tokens |
| 32K context | $0.06 / 1K tokens | $0.12 / 1K tokens |

## OpenAI API + OpenCat 客户端

有了 OpenAI API，再配合一个调用 API 的客户端，就能让 ChatGPT 帮我们完成许多的任务了。

现在市面上套壳的客户端有不少，今天要分享的是 OpenCat(https://opencat.app/) 这个客户端。这个客户端现在在 iOS/iPadOS/macOS App 中都可以使用。安卓版本正在开发中。

这个客户端有很多类型的助手,也可以自定义提示词，用 ChatGPT 协助完成任务。

- 工作助理(提示词：润色我的工作报告)
- 概括邮件助手(提示词：我会给你发送邮件正文，你需要用中文概括邮件的主旨)
- 翻译助手(提示词：翻译我说的每句话)
- PRD 文档助手(提示词：你现在是一个产品经理，你可以根据我下面提到的需求，将其梳理为产品文档)
- 担任高级 Rust 开发人员(提示词：我希望你能担任高级 Rust 开发人员。并且精通 swc，我将描述一个项目细节， 您将为我提供一些技术支持)
- ...

这个客户端吸引我的有如下几点：

- 如果你自己有 OpenAI API, 可以购买 Pro 终生版，加上自己的 OpenAI API， 而终生版才几十块钱，很良心了。另外在 Pro 版本里面， 可以发送邀请链接，给团队成员使用 OpenCat，团队成员不需要科学上网，也不需要 OpeAI API, 只需要一台苹果手机或苹果电脑。
- 如果你没有自己的 OpenAI API, OpenCat 这个客户端提供了 Cloud 订阅模式，月付 18 元或者年付 128 月(每个月最多 1,000,000 次的 tokens 调用额度)，很良心了。或者你加入有 OpenAI API 的人提供的团队版，对方发你邀请链接，你就可以直接使用了(需要 OpenAI API 的调用费用，按量付费)。

本人注册了 OpenAI API，开通了美国银行的虚拟信用卡用于支付 OpenAI API 的账单， 租用云服务器打通了 OpenCat for Team 版本。可以邀请团队成员使用 OpenCat 客户端，现提供邀请链接供需要的朋友试用一下，感受一下 ChatGPT 的能量(以下两个链接任意打开一个即可)：

- 下载 OpenCat https://apps.apple.com/app/apple-store/id6445999201?pt=118260435&ct=team&mt=8
- 或者 在 Safari 浏览器中打开的链接 opencat://team/join?domain=http%3A%2F%2F34.209.87.116%3A80&token=f25fc318-2ea9-4b20-8fe8-a8cf0e76a795

## 打不过它，就加入它

不得不承认，在 ChatGPT 为代表的人工智能面前，我们人类在越来越多的方面是比不过人家的。

比不过人家就干脆躺平了吗？这似乎是显而易见的策略。但其实有更好的策略，那就是从`人机对抗`到`人机协作`再到`人机共生`，让人工智能来辅助我们的工作和生产。

曾经听过这样的一个故事，大概是这样的：有一只饿极了的老虎，在追前面的两个人--甲和乙，两个人为了避免被老虎的吃掉，都在拼命的跑。甲说我实在跑不动了，看来咱们都要被老虎吃了。在一旁的乙没有说话，只是不断的跑。等到甲实在坚持不住，乙还在坚持跑。最后老虎把甲吃掉，而乙活了下来。在甲被老虎吃掉的那一刻，乙只说了一句：我不需要跑赢老虎，我只需要跑赢你。

大潮汹涌，终将漫过每一片洼地。对于未来的世界，我相信前途是光明的，但道路是曲折的。

有了人工智能的强力辅助，将曲折的道路化为坦途。这一路上，我们会更加从容。
