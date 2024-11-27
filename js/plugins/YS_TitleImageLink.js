/*:
 * @plugindesc YS标题画面添加点击跳转网页图片
 * @author 硕明云书
 *
 * @param Image File
 * @desc 要显示的图片文件名，应放在/img/pictures/文件夹内。
 * @default TitleImage
 *
 * @param Image X
 * @desc 图片显示的X坐标。
 * @default 0
 *
 * @param Image Y
 * @desc 图片显示的Y坐标。
 * @default 0
 *
 * @param Image Width
 * @desc 图片宽度限制（例如：200）
 * @default 200
 *
 * @param Image Height
 * @desc 图片高度限制（例如：100）
 * @default 100
 *
 * @param Link URL
 * @desc 点击图片跳转的网页地址。
 * @default https://space.bilibili.com/164546413?spm_id_from=333.1007.0.0
 *
 * @help
 * 将要显示的图片保存到项目的 /img/pictures/ 文件夹中
 * 条款：可商用
 */

(function() {

    var parameters = PluginManager.parameters('YS_TitleImageLink');
    var imageFile = String(parameters['Image File'] || 'TitleImage');
    var imageX = Number(parameters['Image X'] || 0);
    var imageY = Number(parameters['Image Y'] || 0);
    var imageWidth = Number(parameters['Image Width'] || 200);
    var imageHeight = Number(parameters['Image Height'] || 100);
    var linkUrl = String(parameters['Link URL'] || 'https://example.com');

    var _Scene_Title_create = Scene_Title.prototype.create;
    Scene_Title.prototype.create = function() {
        _Scene_Title_create.call(this);
        this.createClickableImage();
    };

    Scene_Title.prototype.createClickableImage = function() {
        this._clickableSprite = new Sprite_Button();
        this._clickableSprite.bitmap = ImageManager.loadPicture(imageFile);
        this._clickableSprite.x = imageX;
        this._clickableSprite.y = imageY;
        this._clickableSprite.setColdFrame(0, 0, imageWidth, imageHeight);
        this._clickableSprite.setHotFrame(0, 0, imageWidth, imageHeight);
        this._clickableSprite.setClickHandler(function() {
            window.open(linkUrl);
        });
        this.addChild(this._clickableSprite);
    };

})();
