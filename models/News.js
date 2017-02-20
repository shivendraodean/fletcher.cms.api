var keystone = require('keystone');
var Types = keystone.Field.Types;

var News = new keystone.List('News');

News.add({
	title: { type: Types.Text, initial:true, required: true},
	content: { type: Types.Textarea, initial: true, required: true },
	author: { type: Types.Text, initial: true, required: true },
  email: { type: Types.Email, initial: true, require: true },
  date: { type: Types.Datetime, initial:true, required: true }
});

News.defaultColumns = 'date','title, author';
News.register();

module.exports = News;
