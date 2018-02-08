<?php
namespace Pvt\VideoBundle\DataFixtures\ORM;

use Doctrine\Common\DataFixtures\FixtureInterface;
use Doctrine\Common\Persistence\ObjectManager;
use Pvt\VideoBundle\Entity\Video;

/**
 * Description of LoadVideos
 *
 * @author root
 */
class LoadVideos implements FixtureInterface {
    public function load(ObjectManager $manager)
    {
        $urls = array(
          'https://www.youtube.com/watch?v=0eiSO09zrRk',
          'https://www.youtube.com/watch?v=tVKaN_H35xs',
          'https://www.youtube.com/watch?v=z_4EIsrAuuA'
        );

    foreach ($urls as $url) {
      $video = new Video();
      $video->setUrl($url);
      $video->setHeure(new \DateTime());
      // On la persiste
      $manager->persist($video);
    }

    $manager->flush();
  }
}
