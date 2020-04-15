/*
 * @file: NeDB数据库
 * @copyright: NanJing Anshare Tech .Com
 * @author: BoBo
 * @Date: 2020年04月15 18:15:10
 */
import Datastore from 'nedb';
// eslint-disable-next-line import/no-extraneous-dependencies

export default new Datastore({
  autoload: true,
  filename: './data.db',
});
