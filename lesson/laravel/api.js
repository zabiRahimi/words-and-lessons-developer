const lessonLaravelApi=[
    [
        'start1',//id
        'ابزار مورد نیاز برای تست api',//name
        '<p class="fa">برای تست کردن api هایی که نوشتیم نیاز به frontEnd داریم ولی برای راحتی کار ابزارهایی وجود دارد که یکی از آنها ابزاری به نام postman هست که بر روی کروم نصب می شود و به راحتی می توان از آن استفاده کرد. جهت استفاده از این ابزار باید آن را بر روی کروم نصب کنیم .</p><p class="fa">برای نصب کافیست در کروم وارد این قسمت شویم App > web store و در صفحه باز شده در کادر جستجو کلمه postman را تایپ نموده و برنامه  tabbed postman  را نصب نماییم.</p>',//body
        
    ],
    [
        'routePlace',
        'محل قرار گیری  route api  در لاراول',
        '<p class="fa">روتهای  api  لاراول در این مسیر قرار می گیرند routes > api.php</p><p class="fa"> این فایل در کلاس سرویس پروایدرها پشتیبانی و بررسی می شودند . این کلاس در این مسیر قرار دارد ، app > Providers > RoteServideProvider.php در این فایل متدی به نام <i class="enS">public function map()</i> وجود دارد که دو متد دیگر به نامهای <i class="enS">mapApiRoutes()</i> و <i class="enS">mapWebRoutes()</i> را فراخوانی می کند که در همان کلاس تعریف شده اند. چنانچه به متد <i class="enS">mapApiRoutes()</i>  سری بزنیم خواهیم دید که روتی در آن به شکل زیر فراخوانی شده است ، </p><pre class="en"> protected function mapApiRoutes(){\nRoute::prefix(\'api\')\n->middleware(\'api\')\n->namespace($this->namespace)\n->group(base_path(\'routes/api.php\'))\;}</pre><p class="fa">همان طور که مشاهده می شود به همه روتهای api  یک  prefix  و یا پیشوندی به اسم  api اضافه شده است همچنین یک میدلوری به نام  api  بر آنها اعمال گردیده است .<br> <i class="note">نکته مهم : بخاطر همین prefix  هنگامی که می خواهیم یک روت  api  را فراخوانی کنیم باید حتما پیشوند  api را نیز ذکر کنیم به عنوان مثال ؛ برای فراخوانی روت  api یی به اسم  zabi  به این صورت عمل می کنیم <i class="enS">/api/zabi</i></i> </p>',

    ],
    [
        'defineRouteApi',
        'تعریف یک روت  api و نحوه اجرای آن در postman',
        '<p class="fa">یک روت ساده را به شکل زیر در این فایل ایجاد میکنیم routes > api.php </p><pre class="en">Route::get(\'/articles\', function(){\nreturn \'characteristics articles\';\n});</pre><p class="fa">در کروم  postman  را اجرا کرده و بسته به نوع روت  که در این مثال  get هست را از کادر مربوطه انتخاب می نماییم  و در قسمت تایپ آدرس ، آدرس کامل روت خود را می نویسیم به این صورت http://localhost:8000/api/articles  سپس دکمه send را می زنیم و جمله charactersitics articles را خواهیم دید <br><i class="note">نکته : باید از قبل سرور لاراول را ران کرده باشیم.</i></p>'
    ],
    [
        'apiMiddleware',
        'میدلورهای ساختاری که بر روت ها اعمال می شوند',
        '<p class="fa" >اعمال میدلورهای که لاراول بطور ساختاری بر روی روت ها اعمال می کند در فایل app/Http/Kernel.php تعریف شده اند . در این فایل آرایه ای به شکل زیر وجود دارد</p><pre class="en">  protected $middlewareGroups = [\n\'web\' => [\n\n\\App\\Http\\Middleware\\EncryptCookies\:\:class,\n\\Illuminate\\Cookie\\Middleware\\AddQueuedCookiesToResponse::class,\n\\Illuminate\\Session\\Middleware\\StartSession::class,\n// \\Illuminate\\Session\\Middleware\\AuthenticateSession::class,\n\\Illuminate\\View\\Middleware\\ShareErrorsFromSession::class,\n\\App\\Http\\Middleware\\VerifyCsrfToken::class,\n \\Illuminate\\Routing\\Middleware\\SubstituteBindings::class,\n],\n\n\'api\' => [\n\'throttle:api\',\n\\Illuminate\\Routing\\Middleware\\SubstituteBindings::class,\n ],\n];</pre><p class="fa">داخل این آرایه دو عضو وجود دارد ، عضو اول که web  نام دارد در برگیرنده میدلورهایی است که بر روتهای وب اعمال می شودند و عضو دوم  api  نام دارد که میدلورهایی بر روت های  api  اعمال می کند .</p>'
    ],
    [
        'versionApi',
        'ورژن بندی api',
        '<p class="fa">یکی از مهمترین کارها در  api  نویسی ورژنبندی api  است . برای این کار لازم هست هم route  ها و هم کنترلها را ورژن بندی کنیم. درادامه نحوه ورژن بندی روت ها و کنترلها را بررسی می کنیم.</p>',
    ],
    [
        'versionRouteApi',
        'ورژن بندی route ها',
        '<p class="fa">برای ورژن بندی روت ها لازم هست برای هر ورژن و هر نسخه از اپلیکیشن یک روت گروپ ایجاد کنیم و با قرار دادن پیشوند یا همان prefix  شماره هر نسخه را مشخص نماییم . به صورت زیر</p><pre class="en">Route::prefix(\'v1\')->namespace(\'App\\Http\\Controllers\\Api\\v1\')->group(function(){\nRoute::get(\'/courses\',\'CourseController@index\');\n});</pre><p class="fa"><i class="note">نکته 1 : نسخه ورژن مثال بالا را به طور فرضی v1 قرار دادیم . لازم به ذکر است که هنگام فراخوانی روت در فرانت اند برنامه باید ورژن برنامه را نیز ذکر کنیم . مانند زیر <i class="enS">api/v1/courses</i> دقت داشته باشید  برای اینکه  ورژنی را به روت گروپ اختصاص دهیم از متد  <i class="enS">prefix()</i> استفاده می کنیم.</i><i class="note">نکته 2 : از لاراول هشت به بعد هنگام فراخوانی کنترلر در روت ها باید آدرس کامل کنترلر را وارد کنیم ، برای راحتی کار در روت گروپ از متد namespace استفاده میکنیم و مسیر کامل کنترلها رو داخلش می نویسیم .</i><i class="note">نکته 3 : روتی که در روت گروپ اضافه کردیم فقط برای مثال هست .</i></p>',
    ],
    [
        'versionControllerApi',
        'ورژن بندی controller ها',
        '<p class="fa">جهت ورژن بندی کنترلرها لازم است برای هر ورژن یک پوشه بسازیم و بهتر است برای خوانایی بهتر برنامه و استفاده راحت تر همان نامی را برای پوشه انتخاب کنیم که به ورژن روت ها دادیم در مثال ورژن بندی روت ها از prefix یا پیشوند  v1 استفاده کردیم برای پوشه کنترلها نیز از همین نام استفاده می کنیم و سپس کنترلرها در این پوشه می سازیم. </p><i class="note">نکته : بهتر است برای متمایز شدن کنترلرهای api با کنترلرهای وب، برای کنترلرهای api از یک پوشه بنام Api استفاده کنیم و پوشه ورژن بندی  api را در این پوشه قرار دهیم . بطور مثال <i class="enS">App\\Http\\Controllers\\Api\\v1\\MyController.php</i></i>',
    ],
    [
        'getDataApi',
        'نحوه ارسال دیتا برای api در کنترلر',
        '<p class="fa">در api  اطلاعات باید به صورت json ارسال شود . ارسال دیتا در کنترلر به صورت معمول و برای وب در قالب view صورت می گیرد اما جهت استفاده در api باید به صورت json  انجام شود . به همین منظور دیتا با متدی به نام <i class="enS">response()</i>ارسال می شود و در قالب json . به مثال زیر دقت کنید .</p><pre class="en">public function index(){\n$data=Corse::all();\nreturn response()->json($data);\n}</pre><p class="fa"><i class="note">نکته 1 : این مثال بسیار ساده هست ، و موارد لازم دیگر مانند status که بسیار حائز اهمیت هست لحاظ نشده است.</i><i class="note">نکته 2 : خوشبختانه لاراول یک ویژگی برای کار با api ها ایجاد کرده به نام api resource که کارایی و راحتی کار را افزایش داده است . در ادامه به این ویژگی می پردازیم.</i></p>',
    ],
 
];
