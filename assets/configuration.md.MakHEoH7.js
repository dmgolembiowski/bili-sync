import{_ as a,c as i,o as e,a3 as s}from"./chunks/framework.Bsyxd66g.js";const m=JSON.parse('{"title":"配置文件","description":"","frontmatter":{},"headers":[],"relativePath":"configuration.md","filePath":"configuration.md","lastUpdated":1740636280000}'),t={name:"configuration.md"},o=s('<h1 id="配置文件" tabindex="-1">配置文件 <a class="header-anchor" href="#配置文件" aria-label="Permalink to &quot;配置文件&quot;">​</a></h1><p>默认的配置文件已经在<a href="/quick-start">快速开始</a>中给出，该文档对配置文件的各个参数依次详细解释。</p><h2 id="video-name-与-page-name" tabindex="-1">video_name 与 page_name <a class="header-anchor" href="#video-name-与-page-name" aria-label="Permalink to &quot;video_name 与 page_name&quot;">​</a></h2><p><code>video_name</code> 与 <code>page_name</code> 用于设置下载文件的命名规则，对于所有下载的内容，将会维持如下的目录结构：</p><ol><li><p>单页视频：</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">├──</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> {video_name}</span></span>\n<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">│  </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ├──</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> {page_name}.mp4</span></span>\n<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">│  </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ├──</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> {page_name}.nfo</span></span>\n<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">│  </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> └──</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> {page_name}-poster.jpg</span></span></code></pre></div></li><li><p>多页视频：</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">├──</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> {video_name}</span></span>\n<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">│  </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ├──</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> poster.jpg</span></span>\n<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">│  </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ├──</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> Season</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 1</span></span>\n<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">│  </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> │  </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ├──</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> {page_name}</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> -</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> S01E01.mp4</span></span>\n<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">│  </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> │  </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ├──</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> {page_name}</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> -</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> S01E01.nfo</span></span>\n<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">│  </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> │  </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ├──</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> {page_name}</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> -</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> S01E01-thumb.jpg</span></span>\n<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">│  </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> │  </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ├──</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> {page_name}</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> -</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> S01E02.mp4</span></span>\n<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">│  </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> │  </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ├──</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> {page_name}</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> -</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> S01E02.nfo</span></span>\n<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">│  </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> │  </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> └──</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> {page_name}</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> -</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> S01E02-thumb.jpg</span></span>\n<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">│  </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> └──</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> tvshow.nfo</span></span></code></pre></div></li></ol><p>这两个参数支持使用模板，其中用 <code>{{ }}</code> 包裹的模板变量在执行时会被动态替换为对应的内容。</p><p>对于 <code>video_name</code>，支持设置 bvid（视频编号）、title（视频标题）、upper_name（up 主名称）、upper_mid（up 主 id）、pubtime（视频发布时间）、fav_time（视频收藏时间）。</p><p>对于 <code>page_name</code>，除支持 video 的全部参数外，还支持 ptitle（分 P 标题）、pid（分 P 页号）。</p><p>为了解决文件名可能过长的问题，程序为模板引入了 <code>truncate</code> 函数。如 <code>{{ truncate title 10 }}</code> 表示截取 <code>title</code> 的前 10 个字符。</p><div class="tip custom-block github-alert"><p class="custom-block-title">TIP</p><p></p><ol><li>仅收藏夹视频会区分 <code>fav_time</code> 和 <code>pubtime</code>，其它类型下载两者的取值是完全相同的；</li><li><code>fav_time</code> 和 <code>pubtime</code> 的格式受 <code>time_format</code> 参数控制，详情可参考 <a href="#time-format">time_format 小节</a>。</li></ol></div><p>此外，<code>video_name</code> 和 <code>page_name</code> 还支持使用路径分割符，如 <code>{{ upper_mid }}/{{ title }}_{{ pubtime }}</code> 表示视频会根据 UP 主 id 将视频分到不同的文件夹中。</p><p>推荐仅在 <code>video_name</code> 中使用路径分割符，暂不清楚在 <code>page_name</code> 中使用路径分割符导致分页存储到子文件夹后是否还能被媒体服务器正确识别。</p><div class="caution custom-block github-alert"><p class="custom-block-title">CAUTION</p><p><strong>路径分隔符</strong>在不同平台定义不同，Windows 下为 <code>\\</code>，MacOS 和 Linux 下为 <code>/</code>。</p></div><h2 id="auth-token" tabindex="-1"><code>auth_token</code> <a class="header-anchor" href="#auth-token" aria-label="Permalink to &quot;`auth_token`&quot;">​</a></h2><p>表示调用程序管理 API 需要的身份凭据，程序会检查 API 请求 Header 中是否包含正确的 <code>Authorization</code> 字段。</p><p>内置管理页前端提供了 <code>auth_token</code> 的输入框，填写后即可成功调用 API 使用管理页。</p><h2 id="bind-address" tabindex="-1"><code>bind_address</code> <a class="header-anchor" href="#bind-address" aria-label="Permalink to &quot;`bind_address`&quot;">​</a></h2><p>程序 Web Server 监听的地址，程序启动时会监听该地址，成功后可通过 <code>http://${bind_address}</code> 访问管理页。</p><h2 id="interval" tabindex="-1"><code>interval</code> <a class="header-anchor" href="#interval" aria-label="Permalink to &quot;`interval`&quot;">​</a></h2><p>表示程序每次执行扫描下载的间隔时间，单位为秒。</p><h2 id="upper-path" tabindex="-1"><code>upper_path</code> <a class="header-anchor" href="#upper-path" aria-label="Permalink to &quot;`upper_path`&quot;">​</a></h2><p>UP 主头像和信息的保存位置。对于使用 Emby、Jellyfin 媒体服务器的用户，需确保此处路径指向 Emby、Jellyfin 配置中的 <code>/metadata/people/</code> 才能够正常在媒体服务器中显示 UP 主的头像。</p><h2 id="nfo-time-type" tabindex="-1"><code>nfo_time_type</code> <a class="header-anchor" href="#nfo-time-type" aria-label="Permalink to &quot;`nfo_time_type`&quot;">​</a></h2><p>表示在视频信息中使用的时间类型，可选值为 <code>favtime</code>（收藏时间）和 <code>pubtime</code>（发布时间）。</p><p>仅收藏夹视频会区分 <code>fav_time</code> 和 <code>pubtime</code>，其它类型下载两者取值相同。</p><h2 id="time-format" tabindex="-1"><code>time_format</code> <a class="header-anchor" href="#time-format" aria-label="Permalink to &quot;`time_format`&quot;">​</a></h2><p>时间格式，用于设置 <code>fav_time</code> 和 <code>pubtime</code> 在 <code>video_name</code>、 <code>page_name</code> 中使用时的显示格式，支持的格式符号可以参考 <a href="https://docs.rs/chrono/latest/chrono/format/strftime/index.html" target="_blank" rel="noreferrer">chrono strftime 文档</a>。</p><h2 id="cdn-sorting" tabindex="-1"><code>cdn_sorting</code> <a class="header-anchor" href="#cdn-sorting" aria-label="Permalink to &quot;`cdn_sorting`&quot;">​</a></h2><p>一般情况下，b 站会为视频、音频流提供一个 baseUrl 与多个 backupUrl，程序默认会按照 baseUrl -&gt; backupUrl 的顺序请求，依次尝试下载。</p><p>如果将 <code>cdn_sorting</code> 设置为 <code>true</code>，程序不再使用默认顺序，而是将所有 url 放到一起统一排序来决定请求顺序。排序优先级从高到低为：</p><ol><li><p>服务商 CDN：<code>upos-sz-mirrorxxxx.bilivideo.com</code></p></li><li><p>自建 CDN：<code>cn-xxxx-dx-v-xxxx.bilivideo.com</code></p></li><li><p>MCDN：<code>xxxx.mcdn.bilivideo.com</code></p></li><li><p>PCDN：<code>xxxx.v1d.szbdyd.com</code></p></li></ol><p>这会让程序优先请求质量更高的 CDN，可能会提高下载速度并增加成功率，但效果因地区、网络环境而异。</p><h2 id="credential" tabindex="-1"><code>credential</code> <a class="header-anchor" href="#credential" aria-label="Permalink to &quot;`credential`&quot;">​</a></h2><p>哔哩哔哩账号的身份凭据，请参考<a href="https://nemo2011.github.io/bilibili-api/#/get-credential" target="_blank" rel="noreferrer">凭据获取流程</a>获取并对应填写至配置文件中，后续 bili-sync 会在必要时自动刷新身份凭据，不再需要手动管理。</p><p>推荐使用匿名窗口获取，避免潜在的冲突。</p><h2 id="filter-option" tabindex="-1"><code>filter_option</code> <a class="header-anchor" href="#filter-option" aria-label="Permalink to &quot;`filter_option`&quot;">​</a></h2><p>过滤选项，用于设置程序的过滤规则，程序会从过滤结果中选择最优的视频、音频流下载。</p><p>这些内容的可选值可前往 <a href="https://github.com/amtoaer/bili-sync/blob/24d0da0bf3ea65fd45d07587e4dcdbb24d11a589/crates/bili_sync/src/bilibili/analyzer.rs#L10-L55" target="_blank" rel="noreferrer">analyzer.rs</a> 中查看。</p><p>注意将过滤范围设置过小可能导致筛选不到符合要求的流导致下载失败，建议谨慎修改。</p><h3 id="video-max-quality" tabindex="-1"><code>video_max_quality</code> <a class="header-anchor" href="#video-max-quality" aria-label="Permalink to &quot;`video_max_quality`&quot;">​</a></h3><p>视频流允许的最高质量。</p><h3 id="video-min-quality" tabindex="-1"><code>video_min_quality</code> <a class="header-anchor" href="#video-min-quality" aria-label="Permalink to &quot;`video_min_quality`&quot;">​</a></h3><p>视频流允许的最低质量。</p><h3 id="audio-max-quality" tabindex="-1"><code>audio_max_quality</code> <a class="header-anchor" href="#audio-max-quality" aria-label="Permalink to &quot;`audio_max_quality`&quot;">​</a></h3><p>音频流允许的最高质量。</p><h3 id="audio-min-quality" tabindex="-1"><code>audio_min_quality</code> <a class="header-anchor" href="#audio-min-quality" aria-label="Permalink to &quot;`audio_min_quality`&quot;">​</a></h3><p>音频流允许的最低质量。</p><h3 id="codecs" tabindex="-1"><code>codecs</code> <a class="header-anchor" href="#codecs" aria-label="Permalink to &quot;`codecs`&quot;">​</a></h3><p>这是 bili-sync 选择视频编码的优先级顺序，优先级按顺序从高到低。此处对编码格式做一个简单说明：</p><ul><li><p>AVC 又称 H.264，是目前使用最广泛的视频编码格式，绝大部分设备可以使用硬件解码播放该格式的视频（也因此播放普遍流畅），但是同等画质下视频体积较大。</p></li><li><p>HEV(C) 又称 H.265，与 AV1 都是新一代的视频编码格式。这两种编码相比 AVC 有更好的压缩率，同等画质下视频体积更小，但由于相对较新，硬件解码支持不如 AVC 广泛。如果你的播放设备不支持则只能使用软件解码播放，这种情况下可能导致播放卡顿、机器发热等问题。</p></li></ul><p>建议查阅自己常用播放设备对这三种编码的硬件解码支持情况以选择合适的编码格式，如果硬件支持 HEV 或 AV1，那么可以将其优先级调高。</p><p>而如果你的设备不支持，或者单纯懒得查询，那么推荐将 AVC 放在第一位以获得最好的兼容性。</p><h3 id="no-dolby-video" tabindex="-1"><code>no_dolby_video</code> <a class="header-anchor" href="#no-dolby-video" aria-label="Permalink to &quot;`no_dolby_video`&quot;">​</a></h3><p>是否禁用杜比视频流。</p><h3 id="no-dolby-audio" tabindex="-1"><code>no_dolby_audio</code> <a class="header-anchor" href="#no-dolby-audio" aria-label="Permalink to &quot;`no_dolby_audio`&quot;">​</a></h3><p>是否禁用杜比音频流。</p><h3 id="no-hdr" tabindex="-1"><code>no_hdr</code> <a class="header-anchor" href="#no-hdr" aria-label="Permalink to &quot;`no_hdr`&quot;">​</a></h3><p>是否禁用 HDR 视频流。</p><h3 id="no-hires" tabindex="-1"><code>no_hires</code> <a class="header-anchor" href="#no-hires" aria-label="Permalink to &quot;`no_hires`&quot;">​</a></h3><p>是否禁用 Hi-Res 音频流。</p><h2 id="danmaku-option" tabindex="-1"><code>danmaku_option</code> <a class="header-anchor" href="#danmaku-option" aria-label="Permalink to &quot;`danmaku_option`&quot;">​</a></h2><p>弹幕的设置选项，用于设置下载弹幕的样式，几乎全部取自<a href="https://github.com/gwy15/danmu2ass" target="_blank" rel="noreferrer">上游仓库</a>。</p><h3 id="duration" tabindex="-1"><code>duration</code> <a class="header-anchor" href="#duration" aria-label="Permalink to &quot;`duration`&quot;">​</a></h3><p>弹幕在屏幕上的持续时间，单位为秒。</p><h3 id="font" tabindex="-1"><code>font</code> <a class="header-anchor" href="#font" aria-label="Permalink to &quot;`font`&quot;">​</a></h3><p>弹幕的字体。</p><h3 id="font-size" tabindex="-1"><code>font_size</code> <a class="header-anchor" href="#font-size" aria-label="Permalink to &quot;`font_size`&quot;">​</a></h3><p>弹幕的字体大小。</p><h3 id="width-ratio" tabindex="-1"><code>width_ratio</code> <a class="header-anchor" href="#width-ratio" aria-label="Permalink to &quot;`width_ratio`&quot;">​</a></h3><p>计算弹幕宽度的比例，为避免重叠可以调大这个数值。</p><h3 id="horizontal-gap" tabindex="-1"><code>horizontal_gap</code> <a class="header-anchor" href="#horizontal-gap" aria-label="Permalink to &quot;`horizontal_gap`&quot;">​</a></h3><p>两条弹幕之间最小的水平距离。</p><h3 id="lane-size" tabindex="-1"><code>lane_size</code> <a class="header-anchor" href="#lane-size" aria-label="Permalink to &quot;`lane_size`&quot;">​</a></h3><p>弹幕所占据的高度，即“行高度/行间距”。</p><h3 id="float-percentage" tabindex="-1"><code>float_percentage</code> <a class="header-anchor" href="#float-percentage" aria-label="Permalink to &quot;`float_percentage`&quot;">​</a></h3><p>屏幕上滚动弹幕最多高度百分比。</p><h3 id="bottom-percentage" tabindex="-1"><code>bottom_percentage</code> <a class="header-anchor" href="#bottom-percentage" aria-label="Permalink to &quot;`bottom_percentage`&quot;">​</a></h3><p>屏幕上底部弹幕最多高度百分比。</p><h3 id="opacity" tabindex="-1"><code>opacity</code> <a class="header-anchor" href="#opacity" aria-label="Permalink to &quot;`opacity`&quot;">​</a></h3><p>透明度，取值范围为 0-255。透明度可以通过 opacity / 255 计算得到。</p><h3 id="bold" tabindex="-1"><code>bold</code> <a class="header-anchor" href="#bold" aria-label="Permalink to &quot;`bold`&quot;">​</a></h3><p>是否加粗。</p><h3 id="outline" tabindex="-1"><code>outline</code> <a class="header-anchor" href="#outline" aria-label="Permalink to &quot;`outline`&quot;">​</a></h3><p>描边宽度。</p><h3 id="time-offset" tabindex="-1"><code>time_offset</code> <a class="header-anchor" href="#time-offset" aria-label="Permalink to &quot;`time_offset`&quot;">​</a></h3><p>时间轴偏移，&gt;0 会让弹幕延后，&lt;0 会让弹幕提前，单位为秒。</p><h2 id="favorite-list" tabindex="-1"><code>favorite_list</code> <a class="header-anchor" href="#favorite-list" aria-label="Permalink to &quot;`favorite_list`&quot;">​</a></h2><p>你想要下载的收藏夹与想要保存的位置。简单示例：</p><div class="language-toml vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">toml</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">3115878158 = </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;/home/amtoaer/Downloads/bili-sync/测试收藏夹&quot;</span></span></code></pre></div><p>收藏夹 ID 的获取方式可以参考<a href="/favorite">这里</a>。</p><h2 id="collection-list" tabindex="-1"><code>collection_list</code> <a class="header-anchor" href="#collection-list" aria-label="Permalink to &quot;`collection_list`&quot;">​</a></h2><p>你想要下载的视频合集/视频列表与想要保存的位置。注意“视频合集”与“视频列表”是两种不同的类型。在配置文件中需要做区分：</p><div class="language-toml vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">toml</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&quot;series:387051756:432248&quot; = </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;/home/amtoaer/Downloads/bili-sync/测试视频列表&quot;</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&quot;season:1728547:101343&quot; = </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;/home/amtoaer/Downloads/bili-sync/测试合集&quot;</span></span></code></pre></div><p>具体说明可以参考<a href="/collection">这里</a>。</p><h2 id="submission-list" tabindex="-1"><code>submission_list</code> <a class="header-anchor" href="#submission-list" aria-label="Permalink to &quot;`submission_list`&quot;">​</a></h2><p>你想要下载的 UP 主投稿与想要保存的位置。简单示例：</p><div class="language-toml vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">toml</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">9183758 = </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;/home/amtoaer/Downloads/bili-sync/测试投稿&quot;</span></span></code></pre></div><p>UP 主 ID 的获取方式可以参考<a href="/submission">这里</a>。</p><h2 id="watch-later" tabindex="-1"><code>watch_later</code> <a class="header-anchor" href="#watch-later" aria-label="Permalink to &quot;`watch_later`&quot;">​</a></h2><p>设置稍后再看的扫描开关与保存位置。</p><p>如果你希望下载稍后再看列表中的视频，可以将 <code>enabled</code> 设置为 <code>true</code>，并填写 <code>path</code>。</p><div class="language-toml vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">toml</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">enabled = </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">path = </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;/home/amtoaer/Downloads/bili-sync/稍后再看&quot;</span></span></code></pre></div><h2 id="concurrent-limit" tabindex="-1"><code>concurrent_limit</code> <a class="header-anchor" href="#concurrent-limit" aria-label="Permalink to &quot;`concurrent_limit`&quot;">​</a></h2><p>对 bili-sync 的并发下载进行多方面的限制，避免 api 请求过于频繁导致的风控。其中 video 和 page 表示下载任务的并发数，rate_limit 表示 api 请求的流量限制。默认取值为：</p><div class="language-toml vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">toml</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">concurrent_limit</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">video = </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">3</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">page = </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2</span></span>\n<span class="line"></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">concurrent_limit</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">rate_limit</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">limit = </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">4</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">duration = </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">250</span></span></code></pre></div><p>具体来说，程序的处理逻辑是严格从上到下的，即程序会首先并发处理多个 video，每个 video 内再并发处理多个 page，程序的并行度可以简单衡量为 <code>video * page</code>（很多 video 都只有单个 page，实际会更接近 <code>video * 1</code>），配置项中的 <code>video</code> 和 <code>page</code> 两个参数就是控制此处的，调节这两个参数可以宏观上控制程序的并行度。</p><p>另一方面，每个执行的任务内部都会发起若干 api 请求以获取信息，这些请求的整体频率受到 <code>rate_limit</code> 的限制，使用漏桶算法实现。如默认配置表示的是每 250ms 允许 4 个 api 请求，超过这个频率的请求会被暂时阻塞，直到漏桶中有空间为止。调节 <code>rate_limit</code> 可以从微观上控制程序的并行度，同时也是最直接、最显著的控制 api 请求频率的方法。</p><p>据观察 b 站风控限制大多集中在主站，因此目前 <code>rate_limit</code> 仅作用于主站的各类请求，如请求各类视频列表、视频信息、获取流下载地址等，对实际的视频、图片下载过程不做限制。</p><div class="tip custom-block github-alert"><p class="custom-block-title">TIP</p><p></p><ol><li>一般来说，<code>video</code> 和 <code>page</code> 的值不需要过大；</li><li><code>rate_limit</code> 的值可以根据网络环境和 api 请求频率进行调整，如果经常遇到风控可以优先调小 limit。</li></ol></div>',109),n=[o];function l(d,h,p,r,c,k){return e(),i("div",null,n)}const b=a(t,[["render",l]]);export{m as __pageData,b as default};
